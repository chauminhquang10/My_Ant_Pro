import React, { useState, useRef } from 'react';
// import ProTable from '@ant-design/pro-table';
import type { ActionType, ProColumns, ProFormInstance } from '@ant-design/pro-components';
import { EditableProTable, ProFormSelect } from '@ant-design/pro-components';
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from 'umi';
import {
  LanguageSupportControllerCreateModel,
  LanguageSupportControllerDeleteModelById,
  LanguageSupportControllerGetInfoPageWithFilter,
  LanguageSupportControllerUpdateModel,
} from '@/services/Translator-API/LanguagesSupport';
import { Button, Card, message, Modal, Space, Tag } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

type EditableRecordDataType = API.LanguageSupport & {
  index?: number;
};

type SelectListItemType = {
  label: string;
  value: string;
};

const defaultDataSelectList: SelectListItemType[] = [
  { label: 'Chinese', value: 'zh' },
  { label: 'English', value: 'en' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Vietnamese', value: 'vi' },
];

type LanguageMenuProps = {
  data: API.LanguageSupport;
};

//type newType = API.BaseResponseLanguageSupport & {message: string | undefined}

const SupportLanguagePage = () => {
  const [resultResponse, setResultResponse] = useState<API.BasePagingResponseLanguageSupport>();

  const [listSupportLanguages, setListSupportLanguages] = useState<API.LanguageSupport[]>();

  const [selectListItem, setSelectListItem] = useState<string[]>([]);

  const [cancelListItem, setCancelListItem] = useState<string[]>([]);

  const actionRef = useRef<ActionType>();

  const restFormRef = useRef<ProFormInstance>();

  const pageSizeRef = React.useRef(10);

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);

  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);

  const { run: runGetAllSupportLanguages } =
    useRequest<API.BaseResponseBasePagingResponseLanguageSupport>(
      (params: API.LanguageSupportControllerGetInfoPageWithFilterParams) =>
        LanguageSupportControllerGetInfoPageWithFilter(params),
      {
        manual: false,
        onSuccess(data) {
          setResultResponse(data);
          setListSupportLanguages(data?.content);
          // const dataNew = data as API.BaseResponseListLanguageSupport;
          // if (dataNew?.success && dataNew.data) {
          //   setListSupportLanguages(dataNew.data);
          // }
        },
        onError(error) {
          console.log('error', error);

          // notification.error({
          //   message: messageErrorData,
          //   description: e?.data?.code,
          // });
        },
      },
    );

  const handleAdd = async (record: API.FactoryCreateRequestUUIDLanguageSupport) => {
    const hide = message.loading('Loading...');
    const req: API.FactoryCreateRequestUUIDLanguageSupport = {
      serviceName: record?.serviceName,
      topic: record?.topic,
      languageSupport: record?.languageSupport,
      id: record?.id,
    };

    try {
      await LanguageSupportControllerCreateModel(req);
      hide();
      message.success('Added successfully');
      setCreateModalVisible(false);
      actionRef.current?.reload();
    } catch (error) {
      hide();
      message.error('Adding failed, please try again!');
    }
  };

  const handleRemove = async (record: API.LanguageSupport) => {
    Modal.confirm({
      title: 'Are you sure want to delete this record?',
      okText: 'Yes',
      okType: 'danger',
      onOk: async () => {
        const hide = message.loading('loading');
        const reqParam: API.LanguageSupportControllerDeleteModelByIdParams = {
          id: record?.id || '',
        };

        try {
          await LanguageSupportControllerDeleteModelById(reqParam);
          actionRef.current?.reloadAndRest?.();
          hide();
          message.success('Deleted successfully!');
        } catch (error) {
          hide();
          message.error('Delete failed, please try again');
        }
      },
    });
  };

  const handleUpdate = async (record: EditableRecordDataType) => {
    const hide = message.loading('Configuring');

    if (record.id) {
      const req: API.FactoryUpdateRequestUUIDLanguageSupport = {
        id: record.id,
        data: {
          serviceName: record.serviceName,
          topic: record.topic,
          languageSupport: selectListItem.length > 0 ? selectListItem : record.languageSupport,
        },
      };

      try {
        const res = await LanguageSupportControllerUpdateModel(req);
        if (res?.success) {
          setSelectListItem([]);
          hide();
          message.success('Updated successfully');
        } else {
          hide();
          message.error('Updated failed, please try again!');
        }
      } catch (error) {
        hide();
        message.error('Updated failed, please try again!');
      }
    }
  };

  const LanguageMenu: React.FC<LanguageMenuProps> = ({ data }) => {
    const handleSelectListChange = (val: string[]) => {
      setCancelListItem(val);
      setSelectListItem(val);
    };
    return (
      <ProFormSelect
        mode="multiple"
        name="languageSupport"
        request={async () => defaultDataSelectList}
        fieldProps={{
          optionItemRender(item: any) {
            return item.label + ' - ' + item.value;
          },
          defaultValue: data?.languageSupport,
          //value: cancelListItem,
          onChange: (val) => handleSelectListChange(val),
        }}
        placeholder="Please enter languages"
        rules={[{ required: true, message: 'Please select a language!' }]}
      />
    );
  };

  const columns: ProColumns[] = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      hideInTable: true,
    },
    {
      title: 'Tên dịnh vụ',
      dataIndex: 'serviceName',
      valueType: 'text',
      key: 'serviceName',
      width: '20%',
    },
    {
      title: 'Chủ đề',
      dataIndex: 'topic',
      valueType: 'text',
      key: 'topic',
      width: '20%',
    },
    {
      title: 'Ngôn ngữ hỗ trợ',
      key: 'languageSupport',
      dataIndex: 'languageSupport',
      valueType: 'select',
      formItemProps: {
        rules: [
          {
            required: true,
            message: 'Please select at least one language!',
          },
        ],
      },
      renderFormItem: (_, { isEditable, record }) => {
        console.log('data outside', record?.languageSupport);
        return isEditable && <LanguageMenu data={record} />;
      },
      render: (_, record) => {
        return (
          <Space>
            {record.languageSupport?.map((item: string) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </Space>
        );
      },
    },
    {
      key: 'action',
      title: 'Hành động',
      valueType: 'option',
      width: '10%',
      render: (text, record, _, action) => [
        <EditOutlined
          style={{ fontSize: '130%' }}
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        />,
        <DeleteOutlined
          key="delete"
          onClick={() => {
            handleRemove(record);
          }}
          style={{ color: 'red', marginLeft: '10px', fontSize: '130%' }}
        />,
      ],
    },
  ];

  console.log(cancelListItem);

  return (
    <>
      <PageContainer
        header={{
          title: 'DANH SÁCH NGÔN NGỮ',
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
        <Card
          style={{
            width: '100%',
          }}
        >
          <EditableProTable
            rowKey="id"
            actionRef={actionRef}
            columns={columns}
            request={async () => {
              const res = await runGetAllSupportLanguages();
              return {
                data: res?.content,
                total: res?.content ? res.content.length : 0,
                success: true,
              };
            }}
            dataSource={listSupportLanguages}
            onChange={setListSupportLanguages}
            toolBarRender={() => [
              <Button
                type="primary"
                key="primary"
                onClick={() => {
                  setCreateModalVisible(true);
                }}
              >
                <PlusOutlined /> New
              </Button>,
            ]}
            editable={{
              type: 'multiple',
              editableKeys,
              actionRender: (row, config, defaultDoms) => {
                return [defaultDoms.save, defaultDoms.cancel];
              },
              onSave: async (rowKey, data) => {
                if (data?.languageSupport?.length > 0) {
                }
                await handleUpdate(data);
              },
              onCancel: async (rowKey, data: API.LanguageSupport) => {
                if (data.languageSupport) setCancelListItem(data?.languageSupport);
              },
              onChange: setEditableRowKeys,
            }}
            recordCreatorProps={false}
            pagination={{
              total: resultResponse?.totalElements,
              pageSize: pageSizeRef.current,
              showSizeChanger: true,
              showTotal: (total, range) =>
                `Từ ${range[0]} đến ${range[1]} trên tổng số ${total} kết quả`,
            }}
          />
        </Card>
        <ModalForm
          title="New Support Language"
          formRef={restFormRef}
          visible={createModalVisible}
          onVisibleChange={setCreateModalVisible}
          onFinish={async (value) => {
            await handleAdd(value as API.FactoryCreateRequestUUIDLanguageSupport);
            restFormRef.current?.resetFields();
          }}
        >
          <ProForm.Group>
            <ProFormText
              width="md"
              name="serviceName"
              label="Service Name"
              placeholder="Please enter service name"
              rules={[{ required: true, message: 'Please enter service name!' }]}
            />
            <ProFormText
              width="md"
              name="topic"
              label="Topic"
              placeholder="Please enter a topic"
              rules={[{ required: true, message: 'Please enter a topic!' }]}
            />
          </ProForm.Group>

          <ProFormSelect
            width={'lg'}
            name="languageSupport"
            label="Support Languages"
            options={[
              { label: 'Chinese', value: 'ch' },
              { label: 'English', value: 'en' },
              { label: 'Japanese', value: 'ja' },
              { label: 'Vietnamese', value: 'vi' },
            ]}
            fieldProps={{
              mode: 'multiple',
              optionItemRender(item: any) {
                return item.label + ' - ' + item.value;
              },
            }}
            placeholder="Please enter languages"
            rules={[{ required: true, message: 'Please select a language!' }]}
          />
        </ModalForm>
      </PageContainer>
    </>
  );
};

export default SupportLanguagePage;
