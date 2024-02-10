import ROUTES from "src/data/ROUTES.ts";

const APP_NAME = import.meta.env.VITE_APP_NAME;

export default class RoutesService {
  public static getPageTitle(...args: string[]): string {
    return [...args, APP_NAME].join(" - ");
  }
  public static getRoute(route: string): string {
    return ROUTES[route as keyof typeof ROUTES];
  }

  public static getHomeRoute(): string {
    return ROUTES.HOME;
  }

  public static getHousingRoute(id: string): string {
    return `${ROUTES.HOUSING}/${id}`;
  }

  public static getAboutRoute(): string {
    return ROUTES.ABOUT;
  }
}
