// TodoInput.js
import { publish } from '../helpers/pubsub';
import { Button, Form, Input } from 'antd';

const TodoInput = () => {
    const [form] = Form.useForm()

    const handleSubmit = () => {
        const { task } = form.getFieldsValue()
        if (task.trim()) {
            publish('new-task', task);
            form.resetFields()
        }
    };

    return (
        <Form
            layout='vertical'
            form={form}
        >
            <Form.Item name='task' label='Task Name'>
                <Input placeholder='Enter a new task' />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType="submit" onClick={handleSubmit}>Submit</Button>
            </Form.Item>
        </Form>

    );
};

export default TodoInput;
