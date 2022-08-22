// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 GET /api/v1/languages/list */
export async function TranslatorLanguageControllerGetInfoListWithFilter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TranslatorLanguageControllerGetInfoListWithFilterParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListTranslatorLanguage>('/api/v1/languages/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
