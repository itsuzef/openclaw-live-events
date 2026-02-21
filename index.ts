import type { OpenClawPluginApi } from "openclaw/plugin-sdk";
import { registerEventsCli } from "./src/events-cli.js";
import { createEventsTool } from "./src/events-tool.js";

const liveEventsPlugin = {
  id: "live-events",
  name: "Live Events",
  description: "Search live events near you via Ticketmaster Discovery API",

  register(api: OpenClawPluginApi) {
    api.registerTool(createEventsTool(api), { name: "live_events_search" });

    api.registerCli(({ program }) => registerEventsCli(api, { program }), {
      commands: ["events"],
    });
  },
};

export default liveEventsPlugin;
