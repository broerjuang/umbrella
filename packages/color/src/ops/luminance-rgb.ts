import { dot3 } from "@thi.ng/vectors";
import type { ReadonlyColor } from "../api";
import { LINEAR_RGB_LUMINANCE, RGB_LUMINANCE } from "../api/constants";

/**
 * Computes RGB luminance, optionally using provided weights (by default:
 * {@link LINEAR_RGB_LUMINANCE}).
 *
 * @param rgb
 * @param weights
 */
export const luminanceRgb = (
    rgb: ReadonlyColor,
    weights = LINEAR_RGB_LUMINANCE
) => dot3(rgb, weights);

/**
 * Similar to {@link luminanceRgb}, but uses {@link RGB_LUMINANCE} coeffs
 */
export const luminanceSrgb = (rgb: ReadonlyColor) => dot3(rgb, RGB_LUMINANCE);

export const luminanceIntArgb32 = (rgb: number) =>
    (((rgb >>> 16) & 0xff) * 76 +
        ((rgb >>> 8) & 0xff) * 150 +
        (rgb & 0xff) * 29) /
    0xfe01;

export const luminanceIntAbgr32 = (rgb: number) =>
    (((rgb >>> 16) & 0xff) * 29 +
        ((rgb >>> 8) & 0xff) * 150 +
        (rgb & 0xff) * 76) /
    0xfe01;

export const luminanceArgb32 = (argb: ReadonlyColor) =>
    luminanceIntArgb32(argb[0]);

export const luminanceAbgr32 = (argb: ReadonlyColor) =>
    luminanceIntAbgr32(argb[0]);