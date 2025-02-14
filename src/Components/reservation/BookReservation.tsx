import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import ButtonAction from "../button/ButtonAction";
import useQueryTable from "../../hooks/query/services/useQueryTable";
import useReduxAuth from "../../hooks/redux/useReduxAuth";
import { handleSetAlert } from "../../redux/slices/alertMessage";
import { errorMessage } from "../../redux/slices/errorMessage";
import {
  CLEAR_LOADING,
  handleIsLoading,
  SET_LOADING,
} from "../../redux/slices/isLoading";
import { AppDispatch } from "../../redux/store";
import { table } from "../../types/type-tables";
import {
  reservationsCreate,
  ServiceReservationsCreate,
} from "../../utils/services/reservations";
import HomeLabelForm from "../../pages/client/home/components/form/label";
import HomeErrorForm from "../../pages/client/home/components/form/error";

const schema = z.object({
  id_table: z.string(),
  reservation_date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date format")
    .transform((val) => new Date(val)),
  reservation_time: z
    .string()
    .regex(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/, "Invalid time format"),
  guest_count: z.string(),
});

type schemaBookReservation = z.infer<typeof schema>;

const BookReservation = () => {
  const { dataTable, errorTable, loadingTable } = useQueryTable();
  const { token } = useReduxAuth();
  const [findTable, setFindTable] = useState<table | null>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<schemaBookReservation>({
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    mutationKey: ["mutateReservation"],
    mutationFn: (data: reservationsCreate) => ServiceReservationsCreate(data),
  });

  const handleFormReservation = handleSubmit((data: reservationsCreate) => {
    if (!token) {
      dispatch(
        handleSetAlert({
          active: true,
          message: "Silahkan masuk untuk melanjutkan",
          transition: true,
          type: "error",
        })
      );
      navigate("/auth/login");
    } else {
      dispatch(handleIsLoading({ type: SET_LOADING }));

      mutate(data, {
        onSuccess: (response) => {
          console.log("onSuccess terpanggil:", response);
          dispatch(handleIsLoading({ type: CLEAR_LOADING }));

          setTimeout(() => {
            dispatch(
              handleSetAlert({
                active: true,
                message: "Reservasi berhasil",
                transition: true,
                type: "success",
              })
            );
          }, 10);
          reset();
        },
        onError: (err) => {
          dispatch(handleIsLoading({ type: CLEAR_LOADING }));
          dispatch(
            handleSetAlert({
              active: true,
              message: errorMessage(err),
              transition: true,
              type: "error",
            })
          );
        },
      });
    }
  });

  if (loadingTable) return <p>Loading..</p>;

  if (errorTable) return <p>Error...</p>;

  const totalSeatsTable = Array.from(
    { length: findTable ? findTable.seats : 0 },
    (_, i) => i + 1
  );

  return (
    <form onSubmit={handleFormReservation}>
      <div className="flex flex-col items-start gap-6">
        <HomeLabelForm htmlFor="table_number" className="">
          <select
            {...register("id_table")}
            id="table_number"
            className="w-full h-full p-2 border rounded outline-none border-primary/20"
            onChange={(e) =>
              setFindTable(handleFilterTable(e.target.value, dataTable.data))
            }
          >
            <option value="">Pilih nomor kursi</option>
            {dataTable.data?.map((table: table) => (
              <option key={table._id} value={table._id}>
                {table.table_number}
              </option>
            ))}
          </select>
          {errors.id_table && (
            <HomeErrorForm>{errors.id_table.message}</HomeErrorForm>
          )}
        </HomeLabelForm>

        <HomeLabelForm htmlFor="reservation_date" className="">
          <input
            {...register("reservation_date")}
            id="reservation_date"
            type="date"
            className="w-full h-full p-2 border rounded outline-none border-primary/20"
          />
          {errors.reservation_date && (
            <HomeErrorForm>{errors.reservation_date.message}</HomeErrorForm>
          )}
        </HomeLabelForm>

        <div className="grid w-full grid-cols-2 gap-5 mb-8">
          <HomeLabelForm htmlFor="guest_count" className="">
            <select
              {...register("guest_count")}
              id="guest_count"
              className="w-full h-full p-2 border rounded border-primary/20"
              disabled={findTable ? false : true}
            >
              <option value="">Jumlah Tamu</option>
              {totalSeatsTable?.map((seats) => (
                <option key={seats} value={seats}>
                  {seats}
                </option>
              ))}
            </select>
            {errors.guest_count && (
              <HomeErrorForm>{errors.guest_count.message}</HomeErrorForm>
            )}
          </HomeLabelForm>

          <HomeLabelForm htmlFor="reservation_time" className="">
            <input
              {...register("reservation_time")}
              id="reservation_time"
              type="time"
              className="w-full h-full p-2 border rounded outline-none border-primary/20"
            />
            {errors.reservation_time && (
              <HomeErrorForm>{errors.reservation_time.message}</HomeErrorForm>
            )}
          </HomeLabelForm>
        </div>
        <ButtonAction type="submit" className="w-full !rounded-md">
          Reservasi
        </ButtonAction>
      </div>
    </form>
  );
};

const handleFilterTable = (id: string, data: table[]) => {
  if (id !== "") {
    return data.find((table: table) => table._id === id);
  } else {
    return null;
  }
};

export default BookReservation;
