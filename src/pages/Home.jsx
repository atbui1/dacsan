export default function Home() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      <div className="border rounded-lg p-4 shadow hover:shadow-lg">
        <h3 className="font-semibold text-lg mb-2">
          🍊 Cam Cao Phong
        </h3>
        <p className="text-gray-600">
          Cam ngọt, mọng nước, đặc sản Hòa Bình.
        </p>
      </div>

      <div className="border rounded-lg p-4 shadow hover:shadow-lg">
        <h3 className="font-semibold text-lg mb-2">
          🍚 Gạo ST25
        </h3>
        <p className="text-gray-600">
          Gạo ngon nhất thế giới, thơm dẻo.
        </p>
      </div>

      <div className="border rounded-lg p-4 shadow hover:shadow-lg">
        <h3 className="font-semibold text-lg mb-2">
          🍵 Trà Thái Nguyên
        </h3>
        <p className="text-gray-600">
          Trà xanh truyền thống, đậm vị.
        </p>
      </div>
    </section>
  )
}
