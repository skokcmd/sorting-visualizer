import { SortingAlgorithmProps } from "../types";
import { setBarArrayColor, sleep } from "../utils";

export async function bubbleSort({
  bars,
  setBars,
  speed,
}: SortingAlgorithmProps): Promise<void> {
  const sortedArray = [...bars];
  for (let i = 0; i < sortedArray.length; ++i) {
    for (let j = 0; j < sortedArray.length - 1; ++j) {
      if (sortedArray[j].weight > sortedArray[j + 1].weight) {
        // compare two bars and swap them and update the state
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
        setBars([...sortedArray]);

        // we change the color of the bars that are being compared
        sortedArray[j].color = "#b91c1c";
        sortedArray[j + 1].color = "#0369a1";
        await sleep(speed);

        // and then we change them back to their original color after sleep
        sortedArray[j].color = "coral";
        sortedArray[j + 1].color = "coral";
      }
    }
  }
  await setBarArrayColor(sortedArray, "#2B84C7", speed, setBars);
}