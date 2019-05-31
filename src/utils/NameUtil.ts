export default class NameUtil {
  static CalculateStoreComponentKey (componentKey: string) {
    return componentKey.split('_')[0] + '/' + componentKey
  }
}
