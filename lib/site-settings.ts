import { prisma } from "@/lib/db";

export const SETTING_DEFAULTS: Record<string, string> = {
  officeName: "ظ…ظƒطھط¨ ط§ظ„ط­ط³ظٹظ† ط¨ظ† ط£ط­ظ…ط¯ ط¨ظ† ط­ط³ظٹظ† ط§ظ„ط³ط¹ط¯ظٹ ظ„ظ„ظ…ط­ط§ظ…ط§ط©",
  phone1:     "0555545533",
  phone2:     "0122635336",
  email:      "alhusseinalmojan@gmail.com",
  address:    "ط¬ط¯ط© - ط´ط§ط±ط¹ ط§ظ„طھط­ظ„ظٹط© ط®ظ„ظپ ظ…ط¨ظ†ظ‰ ط§ظ„ط±ظٹط§ط¶ ط¨ظ„ط§ط²ط§",
  whatsapp:   "966555533554",
  twitter:    "",
  linkedin:   "",
};

export async function getSiteSettings(): Promise<Record<string, string>> {
  try {
    const rows = await prisma.siteSetting.findMany();
    const fromDb: Record<string, string> = {};
    rows.forEach((r) => { fromDb[r.key] = r.value; });
    return { ...SETTING_DEFAULTS, ...fromDb };
  } catch {
    return { ...SETTING_DEFAULTS };
  }
}
