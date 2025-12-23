export default function Header() {
  return (
    <header className="bg-green-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          🌾 Đặc Sản Việt
        </h1>
        <nav className="space-x-6">
          <a className="hover:text-yellow-300" href="#">Trang chủ</a>
          <a className="hover:text-yellow-300" href="#">Sản phẩm</a>
          <a className="hover:text-yellow-300" href="#">Liên hệ</a>
        </nav>
      </div>
    </header>
  )
}
