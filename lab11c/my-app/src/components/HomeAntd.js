import React from 'react';
import './HomeAntd.css';
import {Divider, Space, Button } from 'antd';
import {PageHeader} from '@ant-design/pro-layout';
import { SearchOutlined } from '@ant-design/icons';
import { Card, Result, Calendar } from 'antd';
import { Switch, Rate, Badge } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

const HomeAntd = (props) => {
  return (
    <section>
      <PageHeader title="Antd Demo" subTitle="we will demo only a few components" />
        <Space>
          <Button type="primary" icon={<SearchOutlined />}> Primary </Button>
          <Button value="small">Default </Button>
          <Button type="link" danger>Danger Link</Button>
          <Button disabled>Disabled</Button>
        </Space>

      <Divider />
      <p>In stock <Switch defaultChecked /></p>
      <p>Difficulty Rating <Rate value={5} /> </p>
      <Space>
        <NotificationOutlined />
        <Badge dot>
          <NotificationOutlined />
        </Badge>
        <Badge count={5} >
          <NotificationOutlined style={{ fontSize: '18px' }}/>
        </Badge>
    </Space>

    <Divider />
      <Card title="Complex component inside a Card" >
        <Result status="success"
          title="Successfully used Ant Design components"
          subTitle="This is an example of a Result component"
          extra={[
            <Button type="primary">Go to Website</Button>,
            <Button>Reformat Hard Drive</Button>,
          ]}
        />
      </Card>

      <Divider />
      <Card title="Calendar inside a Card" style={{ width: 500 }}>
        <Calendar fullscreen={false}/>
      </Card>
    </section>
  );

}

export default HomeAntd;
