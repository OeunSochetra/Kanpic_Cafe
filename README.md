This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZnJhbmstY2hpZ2dlci03MC5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_F9PdMkoPeSKx7pcTOtQbFhjHnB88QvPrdX71wbZ7fA
```

## Run json server

```bash
    json-server --watch db.json --port 3030
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# ModalPopUp

## How to pass prop from one component to component and use it with Ant Design UI

## Component 1 needs to be made first

```typescript
import React from "react";
import Modal from "antd/es/modal/Modal";

interface ModalProps {
  modalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const PopupDetail = ({ modalOpen, handleOk, handleCancel }: ModalProps) => {
  return (
    <>
      <Modal open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
        Hello World
      </Modal>
    </>
  );
};

export default PopupDetail;
```

```typescript
const [modalOpen, setModalOpen] = useState<boolean>(false);

const showModal = () => {
  setModalOpen(true);
};

const handleOk = () => {
  setModalOpen(false);
};

const handleCancel = () => {
  setModalOpen(false);
};

return (
  <div>
    <Button onClick={showModal} size="small" style={buttonStyle}>
      Buy now
    </Button>
    <PopupDetail
      modalOpen={modalOpen}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  </div>
);
```
