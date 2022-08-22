// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 DELETE /api/v1/translator/${param0}/delete */
export async function TranslatorControllerDeleteModelById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TranslatorControllerDeleteModelByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseFactoryDeleteResponse>(`/api/v1/translator/${param0}/delete`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/translator/${param0}/detail */
export async function TranslatorControllerGetDetailById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TranslatorControllerGetDetailByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseFactoryGetResponseUUIDTranslator>(
    `/api/v1/translator/${param0}/detail`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /api/v1/translator/create */
export async function TranslatorControllerCreateModel(
  body: API.FactoryCreateRequestUUIDTranslator,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTranslator>('/api/v1/translator/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/translator/delete */
export async function TranslatorControllerDeleteModelWithFilter(
  body: API.Identify,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseFactoryDeleteResponse>('/api/v1/translator/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/translator/detail */
export async function TranslatorControllerGetDetailWithFilter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TranslatorControllerGetDetailWithFilterParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseFactoryGetResponseUUIDTranslator>('/api/v1/translator/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/translator/list */
export async function TranslatorControllerGetInfoListWithFilter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TranslatorControllerGetInfoListWithFilterParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListTranslator>('/api/v1/translator/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/translator/page */
export async function TranslatorControllerGetInfoPageWithFilter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TranslatorControllerGetInfoPageWithFilterParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBasePagingResponseTranslator>('/api/v1/translator/page', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/v1/translator/update */
export async function TranslatorControllerUpdateModel(
  body: API.FactoryUpdateRequestUUIDTranslator,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTranslator>('/api/v1/translator/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
