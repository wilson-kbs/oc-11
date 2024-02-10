import type { LoaderFunctionArgs } from "@remix-run/router/utils.ts";
import ApiService from "src/services/ApiService.ts";

export default class LoaderService {
  public static async homePageLoader() {
    return await ApiService.getAllHousing();
  }

  public static async housingPageLoader({ params }: LoaderFunctionArgs) {
    if (!params.housingId) throw new Error("No housingId provided");
    const housing = await ApiService.getHousing(params.housingId);
    if (!housing) throw new Error("Housing not found");
    return housing;
  }
}
