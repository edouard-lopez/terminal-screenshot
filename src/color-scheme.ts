import {readJson} from "fs-extra";
import {ITheme} from "xterm";

/**
 * Loads a color scheme from a JSON file.
 * @param filePath Path to the color scheme file.
 * @returns The color scheme.
 */
export async function loadColorScheme(filePath: string): Promise<ITheme> {
  try {
    return await readJson(filePath);
  } catch (error) {
    // Always throw with our custom message format
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to load colorScheme from: ${filePath}. Reason: ${errorMessage}`);
  }
}
