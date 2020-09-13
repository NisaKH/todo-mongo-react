export default (mongoose) => {
  let schema = mongoose.Schema(
    {
      name: String,
      isDone: { type: Boolean, default: false },
    },
    { 
      timestamps: true,
      toJSON: {
        transform: (doc, ret) => {
          ret.id = ret._id
          delete ret._id
          delete ret.__v
        }
      }
    }
  )

  return mongoose.model('todo', schema)
}