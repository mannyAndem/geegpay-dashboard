export const svgRectWithBorderRadius = (
  positionX: number,
  positionY: number,
  width: number,
  height: number,
  topLeftRadius: number,
  topRightRadius: number,
  bottomRightRadius: number,
  bottomLeftRadius: number
) => {
  return `M${positionX + topLeftRadius},${positionY}\
      h${width - (topLeftRadius + topRightRadius)}\
      a${topRightRadius},${topRightRadius} 0 0 1 ${topRightRadius},${topRightRadius}\
      v${height - (topRightRadius + bottomRightRadius)}\
      a${bottomRightRadius},${bottomRightRadius} 0 0 1 -${bottomRightRadius},${bottomRightRadius}\
      h-${width - (bottomLeftRadius + bottomRightRadius)}\
      a${bottomLeftRadius},${bottomLeftRadius} 0 0 1 -${bottomLeftRadius},-${bottomLeftRadius}\
      v-${height - (topLeftRadius + bottomLeftRadius)}\
      a${topLeftRadius},${topLeftRadius} 0 0 1 ${topLeftRadius},-${topLeftRadius}\
      z`;
};
