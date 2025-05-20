// global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "swiper-container": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      init?: string;
      slidesperview?: string;
      spaceBetween?: string;
      grabCursor?: string;
      loop?: string;
      centeredSlides?: string;
      initialSlide?: string;
      breakpoints?: string;
    };
    "swiper-slide": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
