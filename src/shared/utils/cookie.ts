class Cookie {
  private getCookieMap() {
    const cookieMap: Record<string, string | undefined> = {};
    const cookieArray = document.cookie.split(';');

    cookieArray.forEach((cookieItem) => {
      cookieItem = cookieItem.trim();
      const [key, value] = cookieItem.split('=');
      cookieMap[key] = value;
    });

    return cookieMap;
  }

  public setCookie(key: string, value: string) {
    const cookieMap = this.getCookieMap();

    cookieMap[key] = value;

    Object.keys(cookieMap).forEach((key) => {
      document.cookie = `${key}=${cookieMap[key]}; path=/;`;
    });
  }

  public getCookie(key: string) {
    const cookieMap = this.getCookieMap();

    return cookieMap[key];
  }
}

export const cookie = new Cookie();
