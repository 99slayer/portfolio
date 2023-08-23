// value/setValue = position/setPosition
export const windowDrag = (e, value, setValue) => {
  e.preventDefault();

  let mouseDown = true;
  const initialPosition = {
    x: e.pageX,
    y: e.pageY
  };

  window.onmousemove = (e) => {
    if (mouseDown) {
      const diff = {
        x: e.pageX - initialPosition.x,
        y: e.pageY - initialPosition.y
      };

      setValue({
        x: value.x + diff.x,
        y: value.y + diff.y
      });
    }
  };

  window.onmouseup = (e) => {
    mouseDown = false;
    e.target.style.cursor = null;
  };
};
