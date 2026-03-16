'use server';
import { DBManager } from '@azrico/nodeserver';

export type CustomFormData = Partial<{
  serviceid: string;
  fullname: string;
  email: string;
  desc: string;
}>;

export const submitRequest = async (formData: CustomFormData) => {
  const { fullname, email, desc, serviceid } = formData;

  await DBManager.tryToConnect();

  // استفاده از @ts-ignore دقیقاً قبل از خطی که ورسل ایراد می‌گیرد
  // @ts-ignore
  return await DBManager.insert(
    'user_requests',
    {
      serviceid: serviceid || 'serviceid',
      fullname,
      email,
      desc,
    },
    // با این کار کل آبجکت تنظیمات رو به عنوان ورودی آزاد رد می‌کنیم
    { noindex: true, user: {} as any } as any,
  );
};
