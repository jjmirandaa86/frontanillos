import "./InitLoading.scss";

export const InitLoading = () => {
  return (
    <>
      <svg viewBox="0 0 800 600">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="35%" class="text--line">
            Tesalia
          </text>
          <text text-anchor="middle" x="50%" y="68%" class="text--line2">
            CBC
          </text>
        </symbol>

        <g class="g-ants">
          <use href="#s-text" class="text-copy"></use>
          <use href="#s-text" class="text-copy"></use>
          <use href="#s-text" class="text-copy"></use>
          <use href="#s-text" class="text-copy"></use>
          <use href="#s-text" class="text-copy"></use>
        </g>
      </svg>
    </>
  );
};
