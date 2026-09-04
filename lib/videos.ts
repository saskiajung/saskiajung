export type VideoMeta = {
  width: number;
  height: number;
  duration: number;
  poster: string;
};

export const videos: Record<string, VideoMeta> = {
  "/videos/yoox/yoox-leave-your-mark-film-1x1": { width: 1080, height: 1080, duration: 60.07, poster: "/videos/yoox/yoox-leave-your-mark-film-1x1-poster.webp" },
  "/videos/yoox/yoox-leave-your-mark-film-9x16": { width: 1080, height: 1920, duration: 60.07, poster: "/videos/yoox/yoox-leave-your-mark-film-9x16-poster.webp" },
};
