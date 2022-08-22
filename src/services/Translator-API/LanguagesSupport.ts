// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 DELETE /api/v1/languages-support/${param0}/delete */
export async function LanguageSupportControllerDeleteModelById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LanguageSupportControllerDeleteModelByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseFactoryDeleteResponse>(
    `/api/v1/languages-support/${param0}/delete`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /api/v1/languages-support/${param0}/detail */
export async function LanguageSupportControllerGetDetailById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LanguageSupportControllerGetDetailByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseFactoryGetResponseUUIDLanguageSupport>(
    `/api/v1/languages-support/${param0}/detail`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /api/v1/languages-support/create */
export async function LanguageSupportControllerCreateModel(
  body: API.FactoryCreateRequestUUIDLanguageSupport,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLanguageSupport>('/api/v1/languages-support/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/languages-support/delete */
export async function LanguageSupportControllerDeleteModelWithFilter(
  body: API.LanguageSupportFilter,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseFactoryDeleteResponse>('/api/v1/languages-support/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/languages-support/detail */
export async function LanguageSupportControllerGetDetailWithFilter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LanguageSupportControllerGetDetailWithFilterParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseFactoryGetResponseUUIDLanguageSupport>(
    '/api/v1/languages-support/detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /api/v1/languages-support/list */
export async function LanguageSupportControllerGetInfoListWithFilter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LanguageSupportControllerGetInfoListWithFilterParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListLanguageSupport>('/api/v1/languages-support/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/languages-support/page */
export async function LanguageSupportControllerGetInfoPageWithFilter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LanguageSupportControllerGetInfoPageWithFilterParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBasePagingResponseLanguageSupport>(
    '/api/v1/languages-support/page',
    {
      method: 'GET',
      params: {
        // size has a default value: 20
        size: '20',
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 PUT /api/v1/languages-support/update */
export async function LanguageSupportControllerUpdateModel(
  body: API.FactoryUpdateRequestUUIDLanguageSupport,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLanguageSupport>('/api/v1/languages-support/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
