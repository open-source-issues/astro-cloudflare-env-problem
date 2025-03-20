import { defineAction } from "astro:actions";
import { LIVEKIT_URL } from "astro:env/server";

export const server = {
  getLivekitUrl: defineAction({
    handler(_input, _context) {
      return {
        url: LIVEKIT_URL,
      };
    },
  }),
};
