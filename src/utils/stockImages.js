export const pexelsImage = (id, width = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const pexelsPortrait = (id) => pexelsImage(id, 400);
