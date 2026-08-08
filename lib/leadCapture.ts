// Shared lead-capture config for the stage funnel (Home + /start) and the
// plain "talk to a person" form on /start. Same Formspree form for both so
// every submission lands in one inbox.
//
// TODO: replace with the real values before this ships.
export const FORMSPREE_ENDPOINT = "REPLACE_WITH_FORMSPREE_ENDPOINT";
export const CALENDLY_URL = "REPLACE_WITH_CALENDLY_URL";

export async function submitLead(
  fields: Record<string, string>,
): Promise<boolean> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    return res.ok;
  } catch {
    return false;
  }
}
