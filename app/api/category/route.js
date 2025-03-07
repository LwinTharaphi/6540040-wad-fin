import dbConnect from '@/lib/db';
import Category from "@/models/Category";

export async function GET() {
  await dbConnect();
  const categories = await Category.find().sort({ order: -1 })
  return Response.json(categories)
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json()
  const category = new Category(body)
  await category.save()
  return Response.json(category)
}

export async function PUT(request) {
  await dbConnect()
  const body = await request.json()
  const category = await Category.findByIdAndUpdate(body._id, body) 
  return Response.json(category)
}
