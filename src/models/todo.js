export default (mongoose) => {
  let schema = mongoose.schema(
    {
      name: String,
      status: String,
    },
    { timestamps: true }
  )

  return mongoose.model('todo', schema)
}