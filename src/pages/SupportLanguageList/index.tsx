import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ProTable from '@ant-design/pro-table';
import { PageContainer, ProColumns } from '@ant-design/pro-components';
import { useRequest } from 'umi';

const SupportLanguagePage = () => {
  const [listSupportLanguages, setListSupportLanguages] = useState<API.LanguageSupport[]>();

  const columns: ProColumns[] = [
    {
      title: 'Tên dịnh vụ',
      dataIndex: 'serviceName',
      valueType: 'text',
      key: 'serviceName',
    },
    {
      title: 'Chủ đề',
      dataIndex: 'topic',
      valueType: 'text',
      key: 'topic',
    },

    {
      title: 'Ngôn ngữ hỗ trợ',
      dataIndex: 'languageSupport',
      valueType: 'text',
      key: 'languageSupport',
      render: (dom, entity) => {
        return <span>{entity.languageSupport.join(', ')}</span>;
      },
      search: false,
    },
  ];

  return (
    <>
      <PageContainer
        header={{
          title: 'DANH SÁCH ĐỊNH DANH',
          ghost: true,
          breadcrumb: {
            separator: '>',
            routes: [
              {
                path: '',
                breadcrumbName: 'Trang chủ',
              },
              {
                path: '',
                breadcrumbName: 'Quản lý ngôn ngữ',
              },
              {
                path: '',
                breadcrumbName: 'Danh sách ngôn ngữ',
              },
            ],
          },
        }}
      >
        <ProTable
          rowKey="id"
          search={{
            labelWidth: 125,
            defaultCollapsed: false,
            span: 12,
          }}
          //   request={async (params) => {
          //     console.log(params);
          //     // const msg = await getUserList(params);
          //     const msg: any = await fetch(
          //       'https://api-dev.bizzone.unicloud.ai/translator/api/v1/languages-support/list',
          //       {
          //         method: 'GET',
          //       },
          //     );
          //     // console.log(msg);

          //     const data = await msg.json();
          //     console.log('test', data);
          //     return {
          //       data: data?.data || [],
          //       success: data.success,
          //       total: data?.data.length - 1 || 0,
          //     };
          //   }}
          columns={columns}
        />
      </PageContainer>
    </>
  );
};

export default SupportLanguagePage;
