import { Button } from '@/uikit';

export default function IndexPage() {
    return (
        <div>
            <h3>Index page</h3>
            <Button title='Default' />
            <Button title='Primary' theme='primary' />
            <Button title='Secondary' theme='secondary' />
        </div>
    );
}
