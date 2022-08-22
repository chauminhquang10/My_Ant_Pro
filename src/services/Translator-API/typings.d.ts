declare namespace API {
  type BasePagingResponseLanguageSupport = {
    content?: LanguageSupport[];
    pageNumber?: number;
    pageSize?: number;
    totalElements?: number;
  };

  type BasePagingResponseTranslator = {
    content?: Translator[];
    pageNumber?: number;
    pageSize?: number;
    totalElements?: number;
  };

  type BaseResponseBasePagingResponseLanguageSupport = {
    success?: boolean;
    data?: BasePagingResponseLanguageSupport;
  };

  type BaseResponseBasePagingResponseTranslator = {
    success?: boolean;
    data?: BasePagingResponseTranslator;
  };

  type BaseResponseFactoryDeleteResponse = {
    success?: boolean;
    data?: FactoryDeleteResponse;
  };

  type BaseResponseFactoryGetResponseUUIDLanguageSupport = {
    success?: boolean;
    data?: FactoryGetResponseUUIDLanguageSupport;
  };

  type BaseResponseFactoryGetResponseUUIDTranslator = {
    success?: boolean;
    data?: FactoryGetResponseUUIDTranslator;
  };

  type BaseResponseLanguageSupport = {
    success?: boolean;
    data?: LanguageSupport;
  };

  type BaseResponseListLanguageSupport = {
    success?: boolean;
    data?: LanguageSupport[];
  };

  type BaseResponseListTranslator = {
    success?: boolean;
    data?: Translator[];
  };

  type BaseResponseListTranslatorLanguage = {
    success?: boolean;
    data?: TranslatorLanguage[];
  };

  type BaseResponseTranslator = {
    success?: boolean;
    data?: Translator;
  };

  type FactoryCreateRequestUUIDLanguageSupport = {
    id?: string;
    serviceName: string;
    topic: string;
    languageSupport?: string[];
  };

  type FactoryCreateRequestUUIDTranslator = {
    id?: string;
    serviceName: string;
    topic: string;
    key: string;
    titles?: Record<string, any>;
    contents: Record<string, any>;
    subTitles?: Record<string, any>;
  };

  type FactoryDeleteResponse = {
    success?: boolean;
  };

  type FactoryGetResponseUUIDLanguageSupport = {
    id?: string;
    serviceName: string;
    topic: string;
    languageSupport?: string[];
  };

  type FactoryGetResponseUUIDTranslator = {
    id?: string;
    serviceName: string;
    topic: string;
    key: string;
    titles?: Record<string, any>;
    contents: Record<string, any>;
    subTitles?: Record<string, any>;
  };

  type FactoryUpdateRequestUUIDLanguageSupport = {
    id: string;
    data: LanguageSupport;
  };

  type FactoryUpdateRequestUUIDTranslator = {
    id: string;
    data: Translator;
  };

  type Identify = {
    serviceName: string;
    topic: string;
    key: string;
  };

  type LanguageSupport = {
    id?: string;
    serviceName: string;
    topic: string;
    languageSupport?: string[];
  };

  type LanguageSupportControllerDeleteModelByIdParams = {
    id: string;
  };

  type LanguageSupportControllerGetDetailByIdParams = {
    id: string;
  };

  type LanguageSupportControllerGetDetailWithFilterParams = {
    serviceName?: string;
    topic?: string;
  };

  type LanguageSupportControllerGetInfoListWithFilterParams = {
    serviceName?: string;
    topic?: string;
  };

  type LanguageSupportControllerGetInfoPageWithFilterParams = {
    serviceName?: string;
    topic?: string;
    number?: number;
    size?: number;
  };

  type LanguageSupportFilter = {
    serviceName?: string;
    topic?: string;
  };

  type Translator = {
    id?: string;
    serviceName: string;
    topic: string;
    key: string;
    titles?: Record<string, any>;
    contents: Record<string, any>;
    subTitles?: Record<string, any>;
  };

  type TranslatorControllerDeleteModelByIdParams = {
    id: string;
  };

  type TranslatorControllerGetDetailByIdParams = {
    id: string;
  };

  type TranslatorControllerGetDetailWithFilterParams = {
    serviceName: string;
    topic: string;
    key: string;
  };

  type TranslatorControllerGetInfoListWithFilterParams = {
    serviceName?: string;
    topic?: string;
    key?: string;
  };

  type TranslatorControllerGetInfoPageWithFilterParams = {
    serviceName?: string;
    topic?: string;
    key?: string;
    page?: number;
    size?: number;
  };

  type TranslatorLanguage = {
    id?: string;
    title?: string;
    content?: string;
    subtitle?: string;
  };

  type TranslatorLanguageControllerGetInfoListWithFilterParams = {
    serviceName?: string;
    topic?: string;
    language: string;
  };
}
