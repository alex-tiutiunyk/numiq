import React from "react";

interface TooltipPosition {
  width?: string;
  left?: string;
  top?: string;
}

interface TooltipArrowPosition {
  left?: string;
  top?: string;
}

interface SmartTooltipProps {
  tooltipWrapRef: React.RefObject<HTMLDivElement>;
  title?: string;
}

const SmartTooltip: React.FC<SmartTooltipProps> = ({
  tooltipWrapRef,
  title,
}) => {
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const tooltipParentRef = React.useRef<HTMLDivElement>(null);

  const flagRef = React.useRef<boolean>(false);

  const [visible, setVisible] = React.useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = React.useState<TooltipPosition>(
    {},
  );
  const [tooltipArrowPosition, setTooltipArrowPosition] =
    React.useState<TooltipArrowPosition>({});
  const [tooltipHeight, setTooltipHeight] = React.useState<number>(0);

  React.useEffect(() => {
    const wrapper = tooltipWrapRef.current;
    const tooltip = tooltipRef.current;
    const tooltipParent = tooltipParentRef.current;

    if (!wrapper || !tooltip || !tooltipParent) return;

    const updateTooltipPosition = () => {
      if (!flagRef.current || visible) {
        const { width, left } = wrapper.getBoundingClientRect();
        const { height } = tooltip.getBoundingClientRect();
        const leftParent = tooltipParent.getBoundingClientRect().left;
        const topParent = tooltipParent.getBoundingClientRect().top;

        setTooltipHeight(height);

        setTooltipArrowPosition({
          left: leftParent - 2 + "px",
          top: topParent - 14 + "px",
        });

        setTooltipPosition({
          width: width + 20 + "px",
          left: left + "px",
          top: topParent - tooltipHeight - 14 + "px",
        });
      }
    };

    updateTooltipPosition();

    window.addEventListener("scroll", updateTooltipPosition);

    flagRef.current = true;

    return () => {
      window.removeEventListener("scroll", updateTooltipPosition);
    };
  }, [tooltipHeight, visible]);

  return (
    <span
      ref={tooltipParentRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group z-[1] mt-0.5 ml-2 inline-block h-4 w-4 bg-[url('../../public/icons/info.png')] [background-size:33px_16px] align-top hover:[background-position:_-17px_0]"
    >
      <span
        ref={tooltipRef}
        style={tooltipPosition}
        className={`invisible fixed left-0 mb-3 min-w-[250px] rounded-[3px] bg-black px-2.5 py-1.5 text-left text-sm font-normal text-white opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100`}
      >
        {title}
        <span
          style={tooltipArrowPosition}
          className="fixed top-full left-[52px] z-[-1] -mt-3 h-5 w-5 transform-[rotate(45deg)] bg-black"
        ></span>
      </span>
    </span>
  );
};

export default SmartTooltip;
