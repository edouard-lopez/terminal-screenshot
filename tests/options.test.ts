import {renderScreenshot} from "../src";
import {TerminalScreenshotOptions} from "../src/options";

defineTest("missing data", {}, `"data" is required`);

defineTest("minimum margin", {data: "test", margin: -5}, `"margin" must be greater than or equal to 1`);

defineTest("maximum margin", {data: "test", margin: 10000000}, `"margin" must be less than or equal to 10000`);

defineTest("invalid kind", {data: "test", kind: "foo"}, `"kind" must be one of [png, jpeg]`);

defineTest("invalid kind", {data: "test", colorScheme: {}}, `"colorScheme" must have at least 1 key`);

function defineTest(id: string, object: unknown, error: string): void {
  it("validates " + id, async () => {
    await expect(() => renderScreenshot(object as TerminalScreenshotOptions)).rejects.toThrow(error);
  });
}
