import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  /*   callbacks: {
    async redirect({ url, baseUrl }) {
      console.log({ url, baseUrl });
      const sections = url.split("/");
      const hasBrowse = sections[sections.length - 1] == "browse";
      const hasBrowseBrowse = sections[sections.length - 1] == "browsebrowse";
      const slicedSections = sections.slice(0, sections.length - 1);
        // If the URL ends with "browsebrowse", append "/browse", else append nothing
      const returnedUrl = hasBrowseBrowse
        ? slicedSections.join("/") + "browse"
        : url + (hasBrowse ? "" : "browse");
      console.log({ sections, slicedSections, returnedUrl });
      return returnedUrl;
    },
  }, */
});

export { handler as GET, handler as POST };
