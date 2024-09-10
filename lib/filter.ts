/* eslint-disable @typescript-eslint/no-explicit-any */
export const trackTitleFilter = (title: string) => (track: any) =>
  track.title?.toLowerCase().includes(title.toLowerCase());
