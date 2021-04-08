import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List, Card } from 'antd'; 

function View() {
  const [data] = useState([
    {
      title: 'hook',
      children: [
        {
          name: '更新',
          path: '/hook/reload'
        }, {
          name: 'vue',
          path: '/hook/vue'
        }
      ]
    }
  ])
  return <div>
    <div className="header"> test demo </div>
        <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Card title={item.title}>
                        <List
                            dataSource={item.children}
                            renderItem={(child) => {
                                return <List.Item>
                                    <Link to={child.path}>{child.name}</Link>
                                </List.Item>
                            }}
                        />
                    </Card>
                </List.Item>
            )}
        />
    </div>
}

export default View;
