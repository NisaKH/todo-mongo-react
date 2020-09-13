export default (mongoose) => {
  let schema = mongoose.Schema(
    {
      name: String,
      status: String,
    },
    { timestamps: true }
  )

  return mongoose.model('todo', schema)
}