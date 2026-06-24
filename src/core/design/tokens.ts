import dpToRem from "../dp.ts";
import type { UKDesignTheme } from "./theme.ts";
import { baselineTheme } from "./themes/baseline.ts";

export interface UKDesignTokens {
  raw: {
    ref: {
      typeface: {
        plain(): string;
        brand(): string;
        emphasized: {
          plain(): string;
          brand(): string;
        };
        "weight-bold"(): string;
        "weight-medium"(): string;
        "weight-regular"(): string;
      };
    };
    sys: {
      typescale: {
        "label-small": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "label-medium": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "label-large": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "body-small": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "body-medium": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "body-large": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "title-small": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "title-medium": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "title-large": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "headline-small": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "headline-medium": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "headline-large": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "display-small": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "display-medium": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        "display-large": {
          "text-transform"(): string;
          "axis-value"(): string;
          "font-style"(): string;
          "text-decoration"(): string;
          "line-height"(): string;
          tracking(): string;
          size(): string;
          weight(): string;
          font(): string;
        };
        emphasized: {
          "label-small": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "label-medium": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "label-large": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "body-small": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "body-medium": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "body-large": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "title-small": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "title-medium": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "title-large": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "headline-small": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "headline-medium": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "headline-large": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "display-small": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "display-medium": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
          "display-large": {
            "text-transform"(): string;
            "axis-value"(): string;
            "font-style"(): string;
            "text-decoration"(): string;
            "line-height"(): string;
            tracking(): string;
            size(): string;
            weight(): string;
            font(): string;
          };
        };
      };
      elevation: {
        surface: {
          "tint-color"(): string;
        };
        "level5-value"(): number;
        level5(): number;
        "level4-value"(): number;
        level4(): number;
        "level3-value"(): number;
        level3(): number;
        "level2-value"(): number;
        level2(): number;
        "level1-value"(): number;
        level1(): number;
        "level0-value"(): number;
        level0(): number;
      };
      state: {
        dragged: { "state-layer-opacity"(): number };
        pressed: { "state-layer-opacity"(): number };
        focus: { "state-layer-opacity"(): number };
        hover: { "state-layer-opacity"(): number };
        "focus-indicator": {
          "outer-offset"(): string;
          thickness(): string;
        };
      };
      shape: {
        corner: {
          "extra-large": {
            top: {
              size(): string;
              "top-left"(): string;
              "top-right"(): string;
            };
            size(): string;
          };

          large: {
            top: {
              size(): string;
              "top-left"(): string;
              "top-right"(): string;
            };
            end: {
              size(): string;
              "top-right"(): string;
              "bottom-right"(): string;
            };
            size(): string;
          };

          medium(): string;
          small(): string;

          "extra-small": {
            top: {
              size(): string;
              "top-left"(): string;
              "top-right"(): string;
            };
            size(): string;
          };

          none(): string;

          full(): string;
        };
      };
      motion: {
        easing: {
          emphasized: {
            normal(): string;
            accelerate(): string;
            decelerate(): string;
          };
          standard: {
            normal(): string;
            accelerate(): string;
            decelerate(): string;
          };
          linear(): string;
        };
        "duration-1000"(): string;
        "duration-900"(): string;
        "duration-800"(): string;
        "duration-700"(): string;
        "duration-600"(): string;
        "duration-550"(): string;
        "duration-500"(): string;
        "duration-450"(): string;
        "duration-400"(): string;
        "duration-350"(): string;
        "duration-300"(): string;
        "duration-250"(): string;
        "duration-200"(): string;
        "duration-150"(): string;
        "duration-100"(): string;
        "duration-50"(): string;
        "path-standard-path"(): string;
      };
      color: {
        lightMode: {
          "surface-tint"(): string;
          "surface-tint-color"(): string;
          "on-error-container"(): string;
          "on-error"(): string;
          "error-container"(): string;
          "on-tertiary-container"(): string;
          "on-tertiary"(): string;
          "tertiary-container"(): string;
          tertiary(): string;
          shadow(): string;
          error(): string;
          outline(): string;
          "outline-variant"(): string;
          "on-background"(): string;
          background(): string;
          "inverse-on-surface"(): string;
          "inverse-surface"(): string;
          "on-surface-variant"(): string;
          "on-surface"(): string;
          "surface-variant"(): string;
          surface(): string;
          "surface-container"(): string;
          "surface-container-low"(): string;
          "surface-container-lowest"(): string;
          "surface-container-high"(): string;
          "surface-container-highest"(): string;
          "on-secondary-container"(): string;
          "on-secondary"(): string;
          "secondary-container"(): string;
          secondary(): string;
          "inverse-primary"(): string;
          "on-primary-container"(): string;
          "on-primary"(): string;
          "primary-container"(): string;
          primary(): string;
        };
        darkMode: {
          "surface-tint"(): string;
          "surface-tint-color"(): string;
          "on-error-container"(): string;
          "on-error"(): string;
          "error-container"(): string;
          "on-tertiary-container"(): string;
          "on-tertiary"(): string;
          "tertiary-container"(): string;
          tertiary(): string;
          shadow(): string;
          error(): string;
          outline(): string;
          "outline-variant"(): string;
          "on-background"(): string;
          background(): string;
          "inverse-on-surface"(): string;
          "inverse-surface"(): string;
          "on-surface-variant"(): string;
          "on-surface"(): string;
          "surface-variant"(): string;
          surface(): string;
          "surface-container"(): string;
          "surface-container-low"(): string;
          "surface-container-lowest"(): string;
          "surface-container-high"(): string;
          "surface-container-highest"(): string;
          "on-secondary-container"(): string;
          "on-secondary"(): string;
          "secondary-container"(): string;
          secondary(): string;
          "inverse-primary"(): string;
          "on-primary-container"(): string;
          "on-primary"(): string;
          "primary-container"(): string;
          primary(): string;
        };
      };
    };
  };
  ref: {
    typeface: {
      plain: string;
      brand: string;
      "weight-bold": string;
      "weight-medium": string;
      "weight-regular": string;
    };
  };
  sys: {
    typescale: {
      "label-small": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "label-medium": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "label-large": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "body-small": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "body-medium": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "body-large": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "title-small": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "title-medium": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "title-large": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "headline-small": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "headline-medium": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "headline-large": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "display-small": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "display-medium": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      "display-large": {
        "text-transform": string;
        "axis-value": string;
        "font-style": string;
        "text-decoration": string;
        "line-height": string;
        tracking: `var(--${string})`;
        size: string;
        weight: string;
        font: string;
      };
      emphasized: {
        "label-small": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "label-medium": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "label-large": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "body-small": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "body-medium": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "body-large": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "title-small": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "title-medium": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "title-large": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "headline-small": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "headline-medium": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "headline-large": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "display-small": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "display-medium": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
        "display-large": {
          "text-transform": string;
          "axis-value": string;
          "font-style": string;
          "text-decoration": string;
          "line-height": string;
          tracking: `var(--${string})`;
          size: string;
          weight: string;
          font: string;
        };
      };
    };
    elevation: {
      surface: {
        "tint-color": string;
      };
      "level5-value": string;
      level5: string;
      "level4-value": string;
      level4: string;
      "level3-value": string;
      level3: string;
      "level2-value": string;
      level2: string;
      "level1-value": string;
      level1: string;
      "level0-value": string;
      level0: string;
    };
    state: {
      dragged: { "state-layer-opacity": string };
      pressed: { "state-layer-opacity": string };
      focus: { "state-layer-opacity": string };
      hover: { "state-layer-opacity": string };
      "focus-indicator": {
        "outer-offset": string;
        thickness: string;
      };
    };
    shape: {
      corner: {
        "extra-large": {
          top: {
            size: string;
            "top-left": string;
            "top-right": string;
          };
          size: string;
        };

        large: {
          top: {
            size: string;
            "top-left": string;
            "top-right": string;
          };
          end: {
            size: string;
            "top-right": string;
            "bottom-right": string;
          };
          size: string;
        };

        medium: string;
        small: string;

        "extra-small": {
          top: {
            size: string;
            "top-left": string;
            "top-right": string;
          };
          size: string;
        };

        none: string;

        full: string;
      };
    };
    motion: {
      easing: {
        emphasized: {
          normal: string;
          accelerate: string;
          decelerate: string;
        };
        standard: {
          normal: string;
          accelerate: string;
          decelerate: string;
        };
        linear: string;
      };
      "duration-1000": string;
      "duration-900": string;
      "duration-800": string;
      "duration-700": string;
      "duration-600": string;
      "duration-550": string;
      "duration-500": string;
      "duration-450": string;
      "duration-400": string;
      "duration-350": string;
      "duration-300": string;
      "duration-250": string;
      "duration-200": string;
      "duration-150": string;
      "duration-100": string;
      "duration-50": string;
      "path-standard-path": string;
    };
    color: {
      "surface-tint": string;
      "surface-tint-color": string;
      "on-error-container": string;
      "on-error": string;
      "error-container": string;
      "surface-container-low": string;
      "on-tertiary-container": string;
      "on-tertiary": string;
      "tertiary-container": string;
      tertiary: string;
      shadow: string;
      error: string;
      outline: string;
      "outline-variant": string;
      "on-background": string;
      background: string;
      "inverse-on-surface": string;
      "inverse-surface": string;
      "on-surface-variant": string;
      "on-surface": string;
      "surface-variant": string;
      surface: string;
      "surface-container": string;
      "surface-container-highest": string;
      "on-secondary-container": string;
      "on-secondary": string;
      "secondary-container": string;
      secondary: string;
      "inverse-primary": string;
      "on-primary-container": string;
      "on-primary": string;
      "primary-container": string;
      primary: string;
    };
  };
}

const tokens: UKDesignTokens = {
  raw: {
    ref: baselineTheme.ref,
    sys: {
      typescale: {
        "label-small": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(16),
          tracking: () => dpToRem(0.5),
          size: () => dpToRem(11),
          weight: () => tokens.raw.ref.typeface["weight-medium"](),
          font: () => tokens.raw.ref.typeface.plain(),
        },
        "label-medium": {
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "text-transform": () => "1",
          "line-height": () => dpToRem(16),
          tracking: () => dpToRem(0.5),
          size: () => dpToRem(12),
          weight: () => tokens.raw.ref.typeface["weight-medium"](),
          font: () => tokens.raw.ref.typeface.plain(),
        },
        "label-large": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(20),
          tracking: () => dpToRem(0.1),
          size: () => dpToRem(14),
          weight: () => tokens.raw.ref.typeface["weight-medium"](),
          font: () => tokens.raw.ref.typeface.plain(),
        },
        "body-small": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(16),
          tracking: () => dpToRem(0.4),
          size: () => dpToRem(12),
          weight: () => tokens.raw.ref.typeface["weight-regular"](),
          font: () => tokens.raw.ref.typeface.plain(),
        },
        "body-medium": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(20),
          tracking: () => dpToRem(0.25),
          size: () => dpToRem(14),
          weight: () => tokens.raw.ref.typeface["weight-regular"](),
          font: () => tokens.raw.ref.typeface.plain(),
        },
        "body-large": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(24),
          tracking: () => dpToRem(0.5),
          size: () => dpToRem(16),
          weight: () => tokens.raw.ref.typeface["weight-regular"](),
          font: () => tokens.raw.ref.typeface.plain(),
        },
        "title-small": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(20),
          tracking: () => dpToRem(0.1),
          size: () => dpToRem(14),
          weight: () => tokens.raw.ref.typeface["weight-medium"](),
          font: () => tokens.raw.ref.typeface.plain(),
        },
        "title-medium": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(24),
          tracking: () => dpToRem(0.15),
          size: () => dpToRem(16),
          weight: () => tokens.raw.ref.typeface["weight-medium"](),
          font: () => tokens.raw.ref.typeface.plain(),
        },
        "title-large": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(28),
          tracking: () => dpToRem(0),
          size: () => dpToRem(22),
          weight: () => tokens.raw.ref.typeface["weight-regular"](),
          font: () => tokens.raw.ref.typeface.brand(),
        },
        "headline-small": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(32),
          tracking: () => dpToRem(0),
          size: () => dpToRem(24),
          weight: () => tokens.raw.ref.typeface["weight-regular"](),
          font: () => tokens.raw.ref.typeface.brand(),
        },
        "headline-medium": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(36),
          tracking: () => dpToRem(0),
          size: () => dpToRem(28),
          weight: () => tokens.raw.ref.typeface["weight-regular"](),
          font: () => tokens.raw.ref.typeface.brand(),
        },
        "headline-large": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(40),
          tracking: () => dpToRem(0),
          size: () => dpToRem(32),
          font: () => tokens.raw.ref.typeface.brand(),
          weight: () => tokens.raw.ref.typeface["weight-regular"](),
        },
        "display-small": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(44),
          tracking: () => dpToRem(0),
          size: () => dpToRem(36),
          weight: () => tokens.raw.ref.typeface["weight-regular"](),
          font: () => tokens.raw.ref.typeface.brand(),
        },
        "display-medium": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(52),
          tracking: () => dpToRem(0),
          size: () => dpToRem(45),
          weight: () => tokens.raw.ref.typeface["weight-regular"](),
          font: () => tokens.raw.ref.typeface.brand(),
        },
        "display-large": {
          "text-transform": () => "unset",
          "axis-value": () => "unset",
          "font-style": () => "unset",
          "text-decoration": () => "unset",
          "line-height": () => dpToRem(64),
          tracking: () => dpToRem(-0.25),
          size: () => dpToRem(57),
          weight: () => tokens.raw.ref.typeface["weight-regular"](),
          font: () => tokens.raw.ref.typeface.brand(),
        },
        emphasized: {
          "label-small": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(16),
            tracking: () => dpToRem(0.5),
            size: () => dpToRem(11),
            weight: () => tokens.raw.ref.typeface["weight-bold"](),
            font: () => tokens.raw.ref.typeface.emphasized.plain(),
          },
          "label-medium": {
            "text-transform": () => "1",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(16),
            tracking: () => dpToRem(0.5),
            size: () => dpToRem(12),
            weight: () => tokens.raw.ref.typeface["weight-bold"](),
            font: () => tokens.raw.ref.typeface.emphasized.plain(),
          },
          "label-large": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(20),
            tracking: () => dpToRem(0.1),
            size: () => dpToRem(14),
            weight: () => tokens.raw.ref.typeface["weight-bold"](),
            font: () => tokens.raw.ref.typeface.emphasized.plain(),
          },
          "body-small": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(16),
            tracking: () => dpToRem(0.4),
            size: () => dpToRem(12),
            weight: () => tokens.raw.ref.typeface["weight-medium"](),
            font: () => tokens.raw.ref.typeface.emphasized.plain(),
          },
          "body-medium": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(20),
            tracking: () => dpToRem(0.25),
            size: () => dpToRem(14),
            weight: () => tokens.raw.ref.typeface["weight-medium"](),
            font: () => tokens.raw.ref.typeface.emphasized.plain(),
          },
          "body-large": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(24),
            tracking: () => dpToRem(0.5),
            size: () => dpToRem(16),
            weight: () => tokens.raw.ref.typeface["weight-medium"](),
            font: () => tokens.raw.ref.typeface.emphasized.plain(),
          },
          "title-small": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(20),
            tracking: () => dpToRem(0.1),
            size: () => dpToRem(14),
            weight: () => tokens.raw.ref.typeface["weight-bold"](),
            font: () => tokens.raw.ref.typeface.emphasized.plain(),
          },
          "title-medium": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(24),
            tracking: () => dpToRem(0.15),
            size: () => dpToRem(16),
            weight: () => tokens.raw.ref.typeface["weight-bold"](),
            font: () => tokens.raw.ref.typeface.emphasized.plain(),
          },
          "title-large": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(28),
            tracking: () => dpToRem(0),
            size: () => dpToRem(22),
            weight: () => tokens.raw.ref.typeface["weight-medium"](),
            font: () => tokens.raw.ref.typeface.emphasized.brand(),
          },
          "headline-small": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(32),
            tracking: () => dpToRem(0),
            size: () => dpToRem(24),
            weight: () => tokens.raw.ref.typeface["weight-medium"](),
            font: () => tokens.raw.ref.typeface.emphasized.brand(),
          },
          "headline-medium": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(36),
            tracking: () => dpToRem(0),
            size: () => dpToRem(28),
            weight: () => tokens.raw.ref.typeface["weight-medium"](),
            font: () => tokens.raw.ref.typeface.emphasized.brand(),
          },
          "headline-large": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(40),
            tracking: () => dpToRem(0),
            size: () => dpToRem(32),
            font: () => tokens.raw.ref.typeface.emphasized.brand(),
            weight: () => tokens.raw.ref.typeface["weight-medium"](),
          },
          "display-small": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(44),
            tracking: () => dpToRem(0),
            size: () => dpToRem(36),
            weight: () => tokens.raw.ref.typeface["weight-medium"](),
            font: () => tokens.raw.ref.typeface.emphasized.brand(),
          },
          "display-medium": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(52),
            tracking: () => dpToRem(0),
            size: () => dpToRem(45),
            weight: () => tokens.raw.ref.typeface["weight-medium"](),
            font: () => tokens.raw.ref.typeface.emphasized.brand(),
          },
          "display-large": {
            "text-transform": () => "unset",
            "axis-value": () => "unset",
            "font-style": () => "unset",
            "text-decoration": () => "unset",
            "line-height": () => dpToRem(64),
            tracking: () => dpToRem(-0.25),
            size: () => dpToRem(57),
            weight: () => tokens.raw.ref.typeface["weight-medium"](),
            font: () => tokens.raw.ref.typeface.emphasized.brand(),
          },
        },
      },
      elevation: {
        surface: {
          "tint-color": () => tokens.raw.sys.color.darkMode.primary(),
        },
        "level5-value": () => 1,
        level5: () => 1,
        "level4-value": () => 8,
        level4: () => 8,
        "level3-value": () => 6,
        level3: () => 6,
        "level2-value": () => 3,
        level2: () => 3,
        "level1-value": () => 1,
        level1: () => 1,
        "level0-value": () => 0,
        level0: () => 0,
      },
      state: {
        dragged: { "state-layer-opacity": () => 0.15 },
        pressed: { "state-layer-opacity": () => 0.12 },
        focus: { "state-layer-opacity": () => 0.12 },
        hover: { "state-layer-opacity": () => 0.08 },
        "focus-indicator": {
          "outer-offset": () => dpToRem(2),
          thickness: () => dpToRem(3),
        },
      },
      shape: {
        corner: {
          "extra-large": {
            top: {
              size: () => `${dpToRem(28)} ${dpToRem(28)} 0 0`,
              "top-left": () => dpToRem(28),
              "top-right": () => dpToRem(28),
            },
            size: () => dpToRem(28),
          },

          large: {
            top: {
              size: () => `${dpToRem(16)} ${dpToRem(16)} 0 0`,
              "top-left": () => dpToRem(16),
              "top-right": () => dpToRem(16),
            },
            end: {
              size: () => `0 0 ${dpToRem(16)} ${dpToRem(16)}`,
              "top-right": () => dpToRem(16),
              "bottom-right": () => dpToRem(16),
            },
            size: () => dpToRem(16),
          },

          medium: () => dpToRem(12),

          small: () => dpToRem(8),

          "extra-small": {
            top: {
              size: () => `${dpToRem(4)} ${dpToRem(4)} 0 0`,
              "top-left": () => dpToRem(4),
              "top-right": () => dpToRem(4),
            },
            size: () => dpToRem(4),
          },

          none: () => dpToRem(0),

          full: () => dpToRem(60),
        },
      },
      motion: {
        easing: {
          emphasized: {
            normal: () => "cubic-bezier(.3,0,0,1)",
            accelerate: () => "cubic-bezier(.3,0,.8,.15)",
            decelerate: () => "cubic-bezier(.05,.7,.1,1)",
          },
          standard: {
            normal: () => "cubic-bezier(0.2, 0, 0, 1)",
            accelerate: () => "cubic-bezier(.3,0,1,1)",
            decelerate: () => "cubic-bezier(0,0,0,1)",
          },
          linear: () => `linear`,
        },
        "duration-1000": () => "1000ms",
        "duration-900": () => "900ms",
        "duration-800": () => "800ms",
        "duration-700": () => "700ms",
        "duration-600": () => "600ms",
        "duration-550": () => "550ms",
        "duration-500": () => "500ms",
        "duration-450": () => "450ms",
        "duration-400": () => "400ms",
        "duration-350": () => "350ms",
        "duration-300": () => "300ms",
        "duration-250": () => "250ms",
        "duration-200": () => "200ms",
        "duration-150": () => "150ms",
        "duration-100": () => "100ms",
        "duration-50": () => "50ms",

        "path-standard-path": () => "1",
      },
      color: {
        // @ts-ignore
        lightMode: {
          "surface-tint": () => "103, 80, 164",
          "surface-tint-color": () => "103, 80, 164",
          "on-error-container": () => "#410e0bff",
          "on-error": () => "#ffffffff",
          "error-container": () => "#f9dedcff",
          "on-tertiary-container": () => "#31111dff",
          "on-tertiary": () => "#ffffffff",
          "tertiary-container": () => "#ffd8e4ff",
          tertiary: () => "#7d5260ff",
          shadow: () => "#000000",
          error: () => "#b3261eff",
          outline: () => "#79747E",
          "outline-variant": () => "#CAC4D0",
          "on-background": () => "#1D1B20",
          background: () => "#FFFBFF",
          "inverse-on-surface": () => "#F5EFF7",
          "inverse-surface": () => "#322F35",
          "on-surface-variant": () => "#49454F",
          "on-surface": () => "#1D1B20",
          "surface-variant": () => "#E7E0EC",
          surface: () => "#FFFBFF",
          "surface-container": () => "#F3EDF7",
          "surface-container-low": () => "#F5EFF7",
          "surface-container-highest": () => "#E6E0E9",
          "on-secondary-container": () => "#1d192bff",
          "on-secondary": () => "#ffffffff",
          "secondary-container": () => "#e8def8ff",
          secondary: () => "#625b71ff",
          "inverse-primary": () => "#d0bcffff",
          "on-primary-container": () => "#21005dff",
          "on-primary": () => "#ffffffff",
          "primary-container": () => "#eaddffff",
          primary: () => "#6750a4ff",
        },
        // @ts-ignore
        darkMode: {
          "surface-tint": () => "208, 188, 255",
          "surface-tint-color": () => "208, 188, 255",
          "on-error-container": () => "#f2b8b5ff",
          "on-error": () => "#601410ff",
          "error-container": () => "#8c1d18ff",
          "on-tertiary-container": () => "#ffd8e4ff",
          "on-tertiary": () => "#492532ff",
          "tertiary-container": () => "#633b48ff",
          tertiary: () => "#efb8c8ff",
          shadow: () => "#000000",
          error: () => "#f2b8b5ff",
          outline: () => "#938F99",
          "outline-variant": () => "#49454F",
          "on-background": () => "#E6E0E9",
          background: () => "#141218",
          "inverse-on-surface": () => "#322F35",
          "inverse-surface": () => "#E6E0E9",
          "on-surface-variant": () => "#CAC4D0",
          "on-surface": () => "#E6E0E9",
          "surface-variant": () => "#49454F",
          surface: () => "#1D1B20",
          "surface-container": () => "#211F26",
          "surface-container-low": () => "#1D1B20",
          "surface-container-highest": () => "#36343B",
          "on-secondary-container": () => "#e8def8ff",
          "on-secondary": () => "#332d41ff",
          "secondary-container": () => "#4a4458ff",
          secondary: () => "#ccc2dcff",
          "inverse-primary": () => "#6750a4ff",
          "on-primary-container": () => "#eaddffff",
          "on-primary": () => "#381e72ff",
          "primary-container": () => "#4f378bff",
          primary: () => "#d0bcffff",
        },
      },
    },
  },
  ref: {
    typeface: {
      plain: "var(--uk-ref-typeface-plain)",
      brand: "var(--uk-ref-typeface-brand)",
      "weight-bold": "var(--uk-ref-typeface-weight-bold)",
      "weight-medium": "var(--uk-ref-typeface-weight-medium)",
      "weight-regular": "var(--uk-ref-typeface-weight-regular)",
    },
  },
  sys: {
    typescale: {
      "label-small": {
        "text-transform": "var(--uk-sys-typescale-label-small-text-transform)",
        "axis-value": "var(--uk-sys-typescale-label-small-axis-value)",
        "font-style": "var(--uk-sys-typescale-label-small-font-style)",
        "text-decoration": "var(--uk-sys-typescale-label-small-text-decoration)",
        "line-height": "var(--uk-sys-typescale-label-small-line-height)",
        tracking: "var(--uk-sys-typescale-label-small-tracking)",
        size: "var(--uk-sys-typescale-label-small-size)",
        weight: "var(--uk-sys-typescale-label-small-weight)",
        font: "var(--uk-sys-typescale-label-small-font)",
      },
      "label-medium": {
        "text-transform": "var(--uk-sys-typescale-label-medium-text-transform)",
        "axis-value": "var(--uk-sys-typescale-label-medium-axis-value)",
        "font-style": "var(--uk-sys-typescale-label-medium-font-style)",
        "text-decoration": "var(--uk-sys-typescale-label-medium-text-decoration)",
        "line-height": "var(--uk-sys-typescale-label-medium-line-height)",
        tracking: "var(--uk-sys-typescale-label-medium-tracking)",
        size: "var(--uk-sys-typescale-label-medium-size)",
        weight: "var(--uk-sys-typescale-label-medium-weight)",
        font: "var(--uk-sys-typescale-label-medium-font)",
      },
      "label-large": {
        "text-transform": "var(--uk-sys-typescale-label-large-text-transform)",
        "axis-value": "var(--uk-sys-typescale-label-large-axis-value)",
        "font-style": "var(--uk-sys-typescale-label-large-font-style)",
        "text-decoration": "var(--uk-sys-typescale-label-large-text-decoration)",
        "line-height": "var(--uk-sys-typescale-label-large-line-height)",
        tracking: "var(--uk-sys-typescale-label-large-tracking)",
        size: "var(--uk-sys-typescale-label-large-size)",
        weight: "var(--uk-sys-typescale-label-large-weight)",
        font: "var(--uk-sys-typescale-label-large-font)",
      },
      "body-small": {
        "text-transform": "var(--uk-sys-typescale-body-small-text-transform)",
        "axis-value": "var(--uk-sys-typescale-body-small-axis-value)",
        "font-style": "var(--uk-sys-typescale-body-small-font-style)",
        "text-decoration": "var(--uk-sys-typescale-body-small-text-decoration)",
        "line-height": "var(--uk-sys-typescale-body-small-line-height)",
        tracking: "var(--uk-sys-typescale-body-small-tracking)",
        size: "var(--uk-sys-typescale-body-small-size)",
        weight: "var(--uk-sys-typescale-body-small-weight)",
        font: "var(--uk-sys-typescale-body-small-font)",
      },
      "body-medium": {
        "text-transform": "var(--uk-sys-typescale-body-medium-text-transform)",
        "axis-value": "var(--uk-sys-typescale-body-medium-axis-value)",
        "font-style": "var(--uk-sys-typescale-body-medium-font-style)",
        "text-decoration": "var(--uk-sys-typescale-body-medium-text-decoration)",
        "line-height": "var(--uk-sys-typescale-body-medium-line-height)",
        tracking: "var(--uk-sys-typescale-body-medium-tracking)",
        size: "var(--uk-sys-typescale-body-medium-size)",
        weight: "var(--uk-sys-typescale-body-medium-weight)",
        font: "var(--uk-sys-typescale-body-medium-font)",
      },
      "body-large": {
        "text-transform": "var(--uk-sys-typescale-body-large-text-transform)",
        "axis-value": "var(--uk-sys-typescale-body-large-axis-value)",
        "font-style": "var(--uk-sys-typescale-body-large-font-style)",
        "text-decoration": "var(--uk-sys-typescale-body-large-text-decoration)",
        "line-height": "var(--uk-sys-typescale-body-large-line-height)",
        tracking: "var(--uk-sys-typescale-body-large-tracking)",
        size: "var(--uk-sys-typescale-body-large-size)",
        weight: "var(--uk-sys-typescale-body-large-weight)",
        font: "var(--uk-sys-typescale-body-large-font)",
      },
      "title-small": {
        "text-transform": "var(--uk-sys-typescale-title-small-text-transform)",
        "axis-value": "var(--uk-sys-typescale-title-small-axis-value)",
        "font-style": "var(--uk-sys-typescale-title-small-font-style)",
        "text-decoration": "var(--uk-sys-typescale-title-small-text-decoration)",
        "line-height": "var(--uk-sys-typescale-title-small-line-height)",
        tracking: "var(--uk-sys-typescale-title-small-tracking)",
        size: "var(--uk-sys-typescale-title-small-size)",
        weight: "var(--uk-sys-typescale-title-small-weight)",
        font: "var(--uk-sys-typescale-title-small-font)",
      },
      "title-medium": {
        "text-transform": "var(--uk-sys-typescale-title-medium-text-transform)",
        "axis-value": "var(--uk-sys-typescale-title-medium-axis-value)",
        "font-style": "var(--uk-sys-typescale-title-medium-font-style)",
        "text-decoration": "var(--uk-sys-typescale-title-medium-text-decoration)",
        "line-height": "var(--uk-sys-typescale-title-medium-line-height)",
        tracking: "var(--uk-sys-typescale-title-medium-tracking)",
        size: "var(--uk-sys-typescale-title-medium-size)",
        weight: "var(--uk-sys-typescale-title-medium-weight)",
        font: "var(--uk-sys-typescale-title-medium-font)",
      },
      "title-large": {
        "text-transform": "var(--uk-sys-typescale-title-large-text-transform)",
        "axis-value": "var(--uk-sys-typescale-title-large-axis-value)",
        "font-style": "var(--uk-sys-typescale-title-large-font-style)",
        "text-decoration": "var(--uk-sys-typescale-title-large-text-decoration)",
        "line-height": "var(--uk-sys-typescale-title-large-line-height)",
        tracking: "var(--uk-sys-typescale-title-large-tracking)",
        size: "var(--uk-sys-typescale-title-large-size)",
        weight: "var(--uk-sys-typescale-title-large-weight)",
        font: "var(--uk-sys-typescale-title-large-font)",
      },
      "headline-small": {
        "text-transform": "var(--uk-sys-typescale-headline-small-text-transform)",
        "axis-value": "var(--uk-sys-typescale-headline-small-axis-value)",
        "font-style": "var(--uk-sys-typescale-headline-small-font-style)",
        "text-decoration": "var(--uk-sys-typescale-headline-small-text-decoration)",
        "line-height": "var(--uk-sys-typescale-headline-small-line-height)",
        tracking: "var(--uk-sys-typescale-headline-small-tracking)",
        size: "var(--uk-sys-typescale-headline-small-size)",
        weight: "var(--uk-sys-typescale-headline-small-weight)",
        font: "var(--uk-sys-typescale-headline-small-font)",
      },
      "headline-medium": {
        "text-transform": "var(--uk-sys-typescale-headline-medium-text-transform)",
        "axis-value": "var(--uk-sys-typescale-headline-medium-axis-value)",
        "font-style": "var(--uk-sys-typescale-headline-medium-font-style)",
        "text-decoration": "var(--uk-sys-typescale-headline-medium-text-decoration)",
        "line-height": "var(--uk-sys-typescale-headline-medium-line-height)",
        tracking: "var(--uk-sys-typescale-headline-medium-tracking)",
        size: "var(--uk-sys-typescale-headline-medium-size)",
        weight: "var(--uk-sys-typescale-headline-medium-weight)",
        font: "var(--uk-sys-typescale-headline-medium-font)",
      },
      "headline-large": {
        "text-transform": "var(--uk-sys-typescale-headline-large-text-transform)",
        "axis-value": "var(--uk-sys-typescale-headline-large-axis-value)",
        "font-style": "var(--uk-sys-typescale-headline-large-font-style)",
        "text-decoration": "var(--uk-sys-typescale-headline-large-text-decoration)",
        "line-height": "var(--uk-sys-typescale-headline-large-line-height)",
        tracking: "var(--uk-sys-typescale-headline-large-tracking)",
        size: "var(--uk-sys-typescale-headline-large-size)",
        weight: "var(--uk-sys-typescale-headline-large-weight)",
        font: "var(--uk-sys-typescale-headline-large-font)",
      },
      "display-small": {
        "text-transform": "var(--uk-sys-typescale-display-small-text-transform)",
        "axis-value": "var(--uk-sys-typescale-display-small-axis-value)",
        "font-style": "var(--uk-sys-typescale-display-small-font-style)",
        "text-decoration": "var(--uk-sys-typescale-display-small-text-decoration)",
        "line-height": "var(--uk-sys-typescale-display-small-line-height)",
        tracking: "var(--uk-sys-typescale-display-small-tracking)",
        size: "var(--uk-sys-typescale-display-small-size)",
        weight: "var(--uk-sys-typescale-display-small-weight)",
        font: "var(--uk-sys-typescale-display-small-font)",
      },
      "display-medium": {
        "text-transform": "var(--uk-sys-typescale-display-medium-text-transform)",
        "axis-value": "var(--uk-sys-typescale-display-medium-axis-value)",
        "font-style": "var(--uk-sys-typescale-display-medium-font-style)",
        "text-decoration": "var(--uk-sys-typescale-display-medium-text-decoration)",
        "line-height": "var(--uk-sys-typescale-display-medium-line-height)",
        tracking: "var(--uk-sys-typescale-display-medium-tracking)",
        size: "var(--uk-sys-typescale-display-medium-size)",
        weight: "var(--uk-sys-typescale-display-medium-weight)",
        font: "var(--uk-sys-typescale-display-medium-font)",
      },
      "display-large": {
        "text-transform": "var(--uk-sys-typescale-display-large-text-transform)",
        "axis-value": "var(--uk-sys-typescale-display-large-axis-value)",
        "font-style": "var(--uk-sys-typescale-display-large-font-style)",
        "text-decoration": "var(--uk-sys-typescale-display-large-text-decoration)",
        "line-height": "var(--uk-sys-typescale-display-large-line-height)",
        tracking: "var(--uk-sys-typescale-display-large-tracking)",
        size: "var(--uk-sys-typescale-display-large-size)",
        weight: "var(--uk-sys-typescale-display-large-weight)",
        font: "var(--uk-sys-typescale-display-large-font)",
      },
      emphasized: {
        "label-small": {
          "text-transform": "var(--uk-sys-typescale-emphasized-label-small-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-label-small-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-label-small-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-label-small-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-label-small-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-label-small-tracking)",
          size: "var(--uk-sys-typescale-emphasized-label-small-size)",
          weight: "var(--uk-sys-typescale-emphasized-label-small-weight)",
          font: "var(--uk-sys-typescale-emphasized-label-small-font)",
        },
        "label-medium": {
          "text-transform": "var(--uk-sys-typescale-emphasized-label-medium-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-label-medium-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-label-medium-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-label-medium-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-label-medium-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-label-medium-tracking)",
          size: "var(--uk-sys-typescale-emphasized-label-medium-size)",
          weight: "var(--uk-sys-typescale-emphasized-label-medium-weight)",
          font: "var(--uk-sys-typescale-emphasized-label-medium-font)",
        },
        "label-large": {
          "text-transform": "var(--uk-sys-typescale-emphasized-label-large-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-label-large-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-label-large-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-label-large-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-label-large-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-label-large-tracking)",
          size: "var(--uk-sys-typescale-emphasized-label-large-size)",
          weight: "var(--uk-sys-typescale-emphasized-label-large-weight)",
          font: "var(--uk-sys-typescale-emphasized-label-large-font)",
        },
        "body-small": {
          "text-transform": "var(--uk-sys-typescale-emphasized-body-small-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-body-small-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-body-small-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-body-small-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-body-small-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-body-small-tracking)",
          size: "var(--uk-sys-typescale-emphasized-body-small-size)",
          weight: "var(--uk-sys-typescale-emphasized-body-small-weight)",
          font: "var(--uk-sys-typescale-emphasized-body-small-font)",
        },
        "body-medium": {
          "text-transform": "var(--uk-sys-typescale-emphasized-body-medium-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-body-medium-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-body-medium-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-body-medium-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-body-medium-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-body-medium-tracking)",
          size: "var(--uk-sys-typescale-emphasized-body-medium-size)",
          weight: "var(--uk-sys-typescale-emphasized-body-medium-weight)",
          font: "var(--uk-sys-typescale-emphasized-body-medium-font)",
        },
        "body-large": {
          "text-transform": "var(--uk-sys-typescale-emphasized-body-large-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-body-large-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-body-large-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-body-large-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-body-large-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-body-large-tracking)",
          size: "var(--uk-sys-typescale-emphasized-body-large-size)",
          weight: "var(--uk-sys-typescale-emphasized-body-large-weight)",
          font: "var(--uk-sys-typescale-emphasized-body-large-font)",
        },
        "title-small": {
          "text-transform": "var(--uk-sys-typescale-emphasized-title-small-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-title-small-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-title-small-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-title-small-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-title-small-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-title-small-tracking)",
          size: "var(--uk-sys-typescale-emphasized-title-small-size)",
          weight: "var(--uk-sys-typescale-emphasized-title-small-weight)",
          font: "var(--uk-sys-typescale-emphasized-title-small-font)",
        },
        "title-medium": {
          "text-transform": "var(--uk-sys-typescale-emphasized-title-medium-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-title-medium-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-title-medium-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-title-medium-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-title-medium-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-title-medium-tracking)",
          size: "var(--uk-sys-typescale-emphasized-title-medium-size)",
          weight: "var(--uk-sys-typescale-emphasized-title-medium-weight)",
          font: "var(--uk-sys-typescale-emphasized-title-medium-font)",
        },
        "title-large": {
          "text-transform": "var(--uk-sys-typescale-emphasized-title-large-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-title-large-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-title-large-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-title-large-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-title-large-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-title-large-tracking)",
          size: "var(--uk-sys-typescale-emphasized-title-large-size)",
          weight: "var(--uk-sys-typescale-emphasized-title-large-weight)",
          font: "var(--uk-sys-typescale-emphasized-title-large-font)",
        },
        "headline-small": {
          "text-transform": "var(--uk-sys-typescale-emphasized-headline-small-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-headline-small-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-headline-small-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-headline-small-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-headline-small-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-headline-small-tracking)",
          size: "var(--uk-sys-typescale-emphasized-headline-small-size)",
          weight: "var(--uk-sys-typescale-emphasized-headline-small-weight)",
          font: "var(--uk-sys-typescale-emphasized-headline-small-font)",
        },
        "headline-medium": {
          "text-transform": "var(--uk-sys-typescale-emphasized-headline-medium-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-headline-medium-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-headline-medium-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-headline-medium-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-headline-medium-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-headline-medium-tracking)",
          size: "var(--uk-sys-typescale-emphasized-headline-medium-size)",
          weight: "var(--uk-sys-typescale-emphasized-headline-medium-weight)",
          font: "var(--uk-sys-typescale-emphasized-headline-medium-font)",
        },
        "headline-large": {
          "text-transform": "var(--uk-sys-typescale-emphasized-headline-large-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-headline-large-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-headline-large-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-headline-large-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-headline-large-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-headline-large-tracking)",
          size: "var(--uk-sys-typescale-emphasized-headline-large-size)",
          weight: "var(--uk-sys-typescale-emphasized-headline-large-weight)",
          font: "var(--uk-sys-typescale-emphasized-headline-large-font)",
        },
        "display-small": {
          "text-transform": "var(--uk-sys-typescale-emphasized-display-small-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-display-small-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-display-small-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-display-small-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-display-small-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-display-small-tracking)",
          size: "var(--uk-sys-typescale-emphasized-display-small-size)",
          weight: "var(--uk-sys-typescale-emphasized-display-small-weight)",
          font: "var(--uk-sys-typescale-emphasized-display-small-font)",
        },
        "display-medium": {
          "text-transform": "var(--uk-sys-typescale-emphasized-display-medium-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-display-medium-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-display-medium-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-display-medium-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-display-medium-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-display-medium-tracking)",
          size: "var(--uk-sys-typescale-emphasized-display-medium-size)",
          weight: "var(--uk-sys-typescale-emphasized-display-medium-weight)",
          font: "var(--uk-sys-typescale-emphasized-display-medium-font)",
        },
        "display-large": {
          "text-transform": "var(--uk-sys-typescale-emphasized-display-large-text-transform)",
          "axis-value": "var(--uk-sys-typescale-emphasized-display-large-axis-value)",
          "font-style": "var(--uk-sys-typescale-emphasized-display-large-font-style)",
          "text-decoration": "var(--uk-sys-typescale-emphasized-display-large-text-decoration)",
          "line-height": "var(--uk-sys-typescale-emphasized-display-large-line-height)",
          tracking: "var(--uk-sys-typescale-emphasized-display-large-tracking)",
          size: "var(--uk-sys-typescale-emphasized-display-large-size)",
          weight: "var(--uk-sys-typescale-emphasized-display-large-weight)",
          font: "var(--uk-sys-typescale-emphasized-display-large-font)",
        },
      },
    },
    elevation: {
      surface: {
        "tint-color": "var(--uk-sys-elevation-surface-tint-color)",
      },
      "level5-value": "var(--uk-sys-elevation-level5-value)",
      level5: "var(--uk-sys-elevation-level5)",
      "level4-value": "var(--uk-sys-elevation-level4-value)",
      level4: "var(--uk-sys-elevation-level4)",
      "level3-value": "var(--uk-sys-elevation-level3-value)",
      level3: "var(--uk-sys-elevation-level3)",
      "level2-value": "var(--uk-sys-elevation-level2-value)",
      level2: "var(--uk-sys-elevation-level2)",
      "level1-value": "var(--uk-sys-elevation-level1-value)",
      level1: "var(--uk-sys-elevation-level1)",
      "level0-value": "var(--uk-sys-elevation-level0-value)",
      level0: "var(--uk-sys-elevation-level0)",
    },
    state: {
      dragged: { "state-layer-opacity": "var(--uk-sys-state-dragged-state-layer-opacity)" },
      pressed: { "state-layer-opacity": "var(--uk-sys-state-pressed-state-layer-opacity)" },
      focus: { "state-layer-opacity": "var(--uk-sys-state-focus-state-layer-opacity)" },
      hover: { "state-layer-opacity": "var(--uk-sys-state-hover-state-layer-opacity)" },
      "focus-indicator": {
        "outer-offset": "var(--uk-sys-state-focus-indicator-outer-offset)",
        thickness: "var(--uk-sys-state-focus-indicator-thickness)",
      },
    },
    shape: {
      corner: {
        "extra-large": {
          top: {
            size: "var(--uk-sys-shape-corner-extra-large-top)",
            "top-left": "var(--uk-sys-shape-corner-extra-large-top-left)",
            "top-right": "var(--uk-sys-shape-corner-extra-large-top-right)",
          },
          size: "var(--uk-sys-shape-corner-extra-large)",
        },

        large: {
          top: {
            size: "var(--uk-sys-shape-corner-large-top)",
            "top-left": "var(--uk-sys-shape-corner-large-top-top-left)",
            "top-right": "var(--uk-sys-shape-corner-large-top-top-right)",
          },
          end: {
            size: "var(--uk-sys-shape-corner-large-end)",
            "top-right": "var(--uk-sys-shape-corner-large-end-top-right)",
            "bottom-right": "var(--uk-sys-shape-corner-large-end-bottom-right)",
          },
          size: "var(--uk-sys-shape-corner-large)",
        },

        medium: "var(--uk-sys-shape-corner-medium)",

        small: "var(--uk-sys-shape-corner-small)",

        "extra-small": {
          top: {
            size: "var(--uk-sys-shape-corner-extra-small-top)",
            "top-left": "var(--uk-sys-shape-corner-extra-small-top-top-left)",
            "top-right": "var(--uk-sys-shape-corner-extra-small-top-top-right)",
          },
          size: "var(--uk-sys-shape-corner-extra-small)",
        },

        none: "var(--uk-sys-shape-corner-none)",
        full: "var(--uk-sys-shape-corner-full)",
      },
    },
    motion: {
      easing: {
        emphasized: {
          normal: "var(--uk-sys-motion-easing-emphasized-normal)",
          accelerate: "var(--uk-sys-motion-easing-emphasized-accelerate)",
          decelerate: "var(--uk-sys-motion-easing-emphasized-decelerate)",
        },
        standard: {
          normal: "var(--uk-sys-motion-easing-standard-normal)",
          accelerate: "var(--uk-sys-motion-easing-standard-accelerate)",
          decelerate: "var(--uk-sys-motion-easing-standard-decelerate)",
        },
        linear: "var(--uk-sys-motion-easing-linear)",
      },
      "duration-1000": "var(--uk-sys-motion-duration-1000)",
      "duration-900": "var(--uk-sys-motion-duration-900)",
      "duration-800": "var(--uk-sys-motion-duration-800)",
      "duration-700": "var(--uk-sys-motion-duration-700)",
      "duration-600": "var(--uk-sys-motion-duration-600)",
      "duration-550": "var(--uk-sys-motion-duration-550)",
      "duration-500": "var(--uk-sys-motion-duration-500)",
      "duration-450": "var(--uk-sys-motion-duration-450)",
      "duration-400": "var(--uk-sys-motion-duration-400)",
      "duration-350": "var(--uk-sys-motion-duration-350)",
      "duration-300": "var(--uk-sys-motion-duration-300)",
      "duration-250": "var(--uk-sys-motion-duration-250)",
      "duration-200": "var(--uk-sys-motion-duration-200)",
      "duration-150": "var(--uk-sys-motion-duration-150)",
      "duration-100": "var(--uk-sys-motion-duration-100)",
      "duration-50": "var(--uk-sys-motion-duration-50)",

      "path-standard-path": "var(--uk-sys-motion-path-standard-path)",
    },
    color: {
      "surface-tint": "var(--uk-sys-color-surface-tint)",
      "surface-tint-color": "var(--uk-sys-color-surface-tint-color)",
      "on-error-container": "var(--uk-sys-color-on-error-container)",
      "on-error": "var(--uk-sys-color-on-error)",
      "error-container": "var(--uk-sys-color-error-container)",
      "surface-container-low": "var(--uk-sys-color-surface-container-low)",
      "on-tertiary-container": "var(--uk-sys-color-on-tertiary-container)",
      "on-tertiary": "var(--uk-sys-color-on-tertiary)",
      "tertiary-container": "var(--uk-sys-color-tertiary-container)",
      tertiary: "var(--uk-sys-color-tertiary)",
      shadow: "var(--uk-sys-color-shadow)",
      error: "var(--uk-sys-color-error)",
      outline: "var(--uk-sys-color-outline)",
      "outline-variant": "var(--uk-sys-color-outline-variant)",
      "on-background": "var(--uk-sys-color-on-background)",
      background: "var(--uk-sys-color-background)",
      "inverse-on-surface": "var(--uk-sys-color-inverse-on-surface)",
      "inverse-surface": "var(--uk-sys-color-inverse-surface)",
      "on-surface-variant": "var(--uk-sys-color-on-surface-variant)",
      "on-surface": "var(--uk-sys-color-on-surface)",
      "surface-variant": "var(--uk-sys-color-surface-variant)",
      surface: "var(--uk-sys-color-surface)",
      "surface-container": "var(--uk-sys-color-surface-container)",
      "surface-container-highest": "var(--uk-sys-color-surface-container-highest)",
      "on-secondary-container": "var(--uk-sys-color-on-secondary-container)",
      "on-secondary": "var(--uk-sys-color-on-secondary)",
      "secondary-container": "var(--uk-sys-color-secondary-container)",
      secondary: "var(--uk-sys-color-secondary)",
      "inverse-primary": "var(--uk-sys-color-inverse-primary)",
      "on-primary-container": "var(--uk-sys-color-on-primary-container)",
      "on-primary": "var(--uk-sys-color-on-primary)",
      "primary-container": "var(--uk-sys-color-primary-container)",
      primary: "var(--uk-sys-color-primary)",
    },
  },
};

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function applyTheme(theme: UKDesignTheme, element: HTMLDivElement, mode: "light" | "dark") {
  for (const key of Object.keys(theme.sys.color.lightMode)) {
    let val = theme.sys.color.lightMode[key as keyof typeof theme.sys.color.lightMode];

    if (val.startsWith("#")) {
      val = hexToRgb(val);
    }
    uk.raw.sys.color.lightMode[key as keyof typeof theme.sys.color.lightMode] = () => val;
  }

  for (const key of Object.keys(theme.sys.color.darkMode)) {
    let val = theme.sys.color.darkMode[key as keyof typeof theme.sys.color.darkMode];

    if (val.startsWith("#")) {
      val = hexToRgb(val);
    }
    uk.raw.sys.color.darkMode[key as keyof typeof theme.sys.color.darkMode] = () => val;
  }

  tokens.raw.ref.typeface = { ...tokens.raw.ref.typeface, ...theme.ref.typeface };

  const cssVars: [string, string][] = [];

  const randomClassName = `uk${Math.floor(Math.random() * 100000000)}`;

  function applyProperty(key: string, value: () => string) {
    cssVars.push([key.slice(4, -1), value()]);
  }

  function recurseLevel(rootObject: Record<string, string | object>, rawRootObject: Record<string, string | object>) {
    switch (typeof rawRootObject) {
      case "function": {
        // @ts-expect-error
        applyProperty(rootObject, rawRootObject);
        break;
      }
      case "object": {
        for (const key of Object.keys(rootObject)) {
          // @ts-expect-error
          recurseLevel(rootObject[key], rawRootObject[key]);
        }
        break;
      }
      default: {
        console.warn("Unknown type for", rootObject, rawRootObject);
        break;
      }
    }
  }

  recurseLevel(uk.ref.typeface, uk.raw.ref.typeface);

  recurseLevel(uk.sys.typescale, uk.raw.sys.typescale);

  applyProperty(uk.sys.elevation.surface["tint-color"], uk.raw.sys.elevation.surface["tint-color"]);

  recurseLevel(uk.sys.state, uk.raw.sys.state);

  recurseLevel(uk.sys.shape, uk.raw.sys.shape);

  recurseLevel(uk.sys.motion, uk.raw.sys.motion);

  if (mode === "light") {
    recurseLevel(uk.sys.color, uk.raw.sys.color.lightMode);
  } else if (mode === "dark") {
    recurseLevel(uk.sys.color, uk.raw.sys.color.darkMode);
  }

  element.querySelector("[data-uikit-styles]")!.innerHTML = `.${randomClassName} {
    ${cssVars
      .map((v) => {
        return `${v[0]}:${v[1]}`;
      })
      .join(";")}
}

@media (prefers-reduced-motion: reduce) {
    .${randomClassName} {
        --uk-sys-motion-duration-1000: 0ms;
        --uk-sys-motion-duration-900: 0ms;
        --uk-sys-motion-duration-800: 0ms;
        --uk-sys-motion-duration-700: 0ms;
        --uk-sys-motion-duration-600: 0ms;
        --uk-sys-motion-duration-550: 0ms;
        --uk-sys-motion-duration-500: 0ms;
        --uk-sys-motion-duration-450: 0ms;
        --uk-sys-motion-duration-400: 0ms;
        --uk-sys-motion-duration-350: 0ms;
        --uk-sys-motion-duration-300: 0ms;
        --uk-sys-motion-duration-250: 0ms;
        --uk-sys-motion-duration-200: 0ms;
        --uk-sys-motion-duration-150: 0ms;
        --uk-sys-motion-duration-100: 0ms;
        --uk-sys-motion-duration-50: 0ms;
    }
}`;
  element.classList.add(randomClassName);
}

const uk = tokens;

export { applyTheme, uk };
