## 🛠️ Project Setup & Documentation

### 🚀 How to Run the Project Locally

1. **Clone the Repository**

    ```bash
    git clone https://github.com/TheProjectsX/fresh-harvests
    cd fresh-harvests
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Environment Variables**

    - Create a `.env` file at the root.
    - Add your environment variables like or follow `.env.example`:

        ```
        NEXT_PUBLIC_API_URL=https://your-api.com
        ```

4. **Run the App**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000)

---

### 📦 Build and Deploy

1. **Build the Project**

    ```bash
    npm run build
    ```

2. **Start the Production Server Locally**

    ```bash
    npm start
    ```

3. **Deploy (Options)**

    - **Vercel** (Recommended for Next.js)

        - Push code to GitHub
        - Go to [vercel.com](https://vercel.com), import repo, deploy.

    - **Other Platforms**

        - Make sure `.next`, `public`, and `node_modules` are correctly configured
        - Host on your own server or platforms like Netlify, Railway, etc.
