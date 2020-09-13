export default (mongoose) => {
  let schema = mongoose.Schema(
    {
      id: { type: String, default: mongoose.Types.ObjectId },
      name: String,
      isDone: { type: Boolean, default: false },
    },
    { 
      timestamps: true,
      toJSON: {
        transform: (doc, ret) => {
          delete ret._id
          delete ret.__v
        }
      }
    }
  )

  return mongoose.model('todo', schema)
}