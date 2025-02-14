import { z } from "zod";
import { dataStatusDiscount } from "../../../../types/type-discounts";
import { statusDiscount } from "../../../../types/type-product";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../../components/form/InputField";
import SelectField from "../../components/form/SelectField";

const schema = z.object({
    name_discount: z.string(),
    status: z.string(),
    discount_percentage: z.string(),
    start_date: z.string(),
    end_date: z.string()
})

type DiscountSchema = z.infer<typeof schema>

const ProductDiscountUpdate = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<DiscountSchema>({resolver: zodResolver(schema)})

  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-5 p-5 mb-4 border rounded-md shadow">
          <h3>Update Product Discount</h3>
          <div className="flex items-center w-full gap-5">
            <InputField<DiscountSchema> id="nameDiscount" isTitle title="Name Discount" register={register("name_discount")} type="text"  />
            <SelectField<DiscountSchema> id="status" isTitle title="Status Discount" register={register("status")} >
            {dataStatusDiscount?.map((discount: statusDiscount) => (
                  <option value={discount}>{discount}</option>
                ))}
            </SelectField>
          </div>
          <div className="flex items-center gap-5">
            <label
              htmlFor="totalDiscount"
              className="flex flex-col items-start w-full gap-2 text-sm"
            >
              <span>Discount</span>
              <input
                type="text"
                id="totalDiscount"
                className="w-full px-3 py-2 border border-green-500 rounded"
              />
            </label>

            <label htmlFor="validFrom" className="flex flex-col items-start w-full gap-2 text-sm">
              <span>Discount Valid From</span>
              <input
                type="date"
                id="validFrom"
                className="w-full px-3 py-2 border border-green-500 rounded"
              />
            </label>
            <label htmlFor="expired" className="flex flex-col items-start w-full gap-2 text-sm">
              <span>Expired</span>
              <input
                type="date"
                id="expired"
                className="w-full px-3 py-2 border border-green-500 rounded"
              />
            </label>
          </div>
          <div className="flex items-center gap-5">
            <label htmlFor="product" className="flex flex-col items-start w-full gap-2 text-sm">
              <span>Product</span>
              <input
                type="text"
                id="product"
                className="w-full px-3 py-2 border rounded border-devBlack/30"
                disabled
              />
            </label>
            <label htmlFor="category" className="flex flex-col items-start w-full gap-2 text-sm">
              <span>Category</span>
              <input
                type="text"
                id="category"
                className="w-full px-3 py-2 border rounded border-devBlack/30"
                disabled
              />
            </label>
            <label htmlFor="price" className="flex flex-col items-start w-full gap-2 text-sm">
              <span>Price</span>
              <input
                type="text"
                id="price"
                className="w-full px-3 py-2 border rounded border-devBlack/30"
                disabled
              />
            </label>
          </div>
        </div>
        <button className="px-5 py-1 text-sm text-white bg-green-500 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductDiscountUpdate;
