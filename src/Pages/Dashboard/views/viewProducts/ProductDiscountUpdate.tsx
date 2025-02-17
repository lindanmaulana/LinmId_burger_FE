import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { handleSetAlert } from "../../../../redux/slices/alertMessage";
import { errorMessage } from "../../../../redux/slices/errorMessage";
import {
  CLEAR_LOADING,
  handleIsLoading,
  SET_LOADING,
} from "../../../../redux/slices/isLoading";
import { AppDispatch } from "../../../../redux/store";
import { dataStatusDiscount, discount } from "../../../../types/type-discounts";
import { statusDiscount } from "../../../../types/type-product";
import {
  dataDiscountUpdate,
  ServiceDiscountUpdate,
} from "../../../../utils/services/discounts";
import InputField from "../../components/form/InputField";
import SelectField from "../../components/form/SelectField";
import useQueryDiscountGetOne from "../../../../hooks/query/services/useQueryDiscountGetOne";
import { helperFormatDate } from "../../../../utils/helpers/formatDate";
import { useEffect } from "react";

const schema = z.object({
  name_discount: z.string(),
  status: z.enum(["active", "expired", "upcoming"]),
  discount_percentage: z.number(),
  start_date: z.string(),
  end_date: z.string(),
});

type DiscountSchema = z.infer<typeof schema>;

const ProductDiscountUpdate = () => {
  const { id = "" } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { dataDiscountOne, error, errorDiscountOne, loadingDiscountOne } =
    useQueryDiscountGetOne<discount>(id);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<DiscountSchema>({ resolver: zodResolver(schema) });
  const { mutate } = useMutation({
    mutationKey: ["mutateDiscountUpdate"],
    mutationFn: (data: dataDiscountUpdate) => ServiceDiscountUpdate(id, data),
  });

  const handleFormUpdate = handleSubmit((data: dataDiscountUpdate) => {
    dispatch(handleIsLoading({ type: SET_LOADING }));

    mutate(data, {
      onSuccess: (data) => {
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
        dispatch(
          handleSetAlert({
            active: true,
            message: data.message,
            transition: true,
            type: "success",
          })
        );
        navigate("/dashboard/product-discount");
      },
      onError: (err) => {
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
        dispatch(
          handleSetAlert({
            active: true,
            message: errorMessage(err),
            transition: true,
            type: "success",
          })
        );
      },
    });
  });

  useEffect(() => {
    if(dataDiscountOne) {
      reset({
        name_discount: dataDiscountOne.name_discount,
        status: dataDiscountOne.status
      })
    }
  }, [id, dataDiscountOne, reset])

  if (loadingDiscountOne) return <p>Loading..</p>;
  if (errorDiscountOne) return <p>Error...</p>;

  return (
    <div>
      <form onSubmit={handleFormUpdate}>
        <div className="flex flex-col gap-5 p-5 mb-4 border rounded-md shadow">
          <h3 className="text-2xl font-open-sans-semibold">
            Update Product Discount
          </h3>
          <div className="flex items-center w-full gap-5">
            <InputField<DiscountSchema>
              id="nameDiscount"
              isTitle
              isEdited
              title="Name Discount"
              register={register("name_discount")}
              type="text"
              defaultValue={
                dataDiscountOne?.name_discount
              }
            />
            <SelectField<DiscountSchema>
              id="status"
              isTitle
              title="Status Discount"
              register={register("status")}
            >
              {dataStatusDiscount?.map((discount: statusDiscount) => (
                <option key={discount} value={discount}>
                  {discount}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="flex items-center gap-5">
            <InputField<DiscountSchema>
              id="totalDiscount"
              isTitle
              isEdited
              title="Discount"
              register={register("discount_percentage", {
                setValueAs: (value) => Number(value),
              })}
              type="text"
              defaultValue={
               dataDiscountOne?.discount_percentage
              }
            />
            <InputField<DiscountSchema>
              id="validFrom"
              isTitle
              isEdited
              title="Discount Valid"
              register={register("start_date")}
              type="date"
              defaultValue={
                dataDiscountOne?.start_date
                  ? helperFormatDate(dataDiscountOne.start_date).split(",")[0]
                  : "Loading.."
              }
            />
            <InputField<DiscountSchema>
              id="expired"
              isTitle
              isEdited
              title="Expired"
              register={register("end_date")}
              type="date"
              defaultValue={
                dataDiscountOne?.end_date
                  ? helperFormatDate(dataDiscountOne.end_date).split(",")[0]
                  : "Loading..."
              }
            />
          </div>

          <div className="flex items-center gap-5">
            <InputField<DiscountSchema>
              id="product"
              isTitle
              title="Product"
              type="text"
              defaultValue={dataDiscountOne?.id_product.name}
            />
            <InputField<DiscountSchema>
              id="category"
              isTitle
              title="Category"
              type="text"
              defaultValue={dataDiscountOne?.id_product.id_categorie.name}
            />
            <InputField<DiscountSchema>
              id="price"
              isTitle
              title="Price"
              type="text"
              defaultValue={dataDiscountOne?.id_product.price}
            />
          </div>
        </div>
        <button className="px-5 py-1 text-sm text-white bg-green-500 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default ProductDiscountUpdate;
