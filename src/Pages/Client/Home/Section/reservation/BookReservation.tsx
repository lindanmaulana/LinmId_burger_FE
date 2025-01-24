import { z } from "zod";
import useQueryTable from "../../../../../hooks/query/tables/useQueryTable";
import { table } from "../../../../../types/type-tables";
import { useState } from "react";
import ButtonAction from "../../../../../components/button/ButtonAction";
import HomeLabel from "../../components/form/label";

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
  const [findTable, setFindTable] = useState<table | null>();

  if (loadingTable) return <p>Loading..</p>;

  if (errorTable) return <p>Error...</p>;

  const totalSeatsTable = Array.from(
    { length: findTable ? findTable.seats : 0 },
    (_, i) => i + 1
  );

  return (
    <form>
      <div className="flex flex-col items-start gap-6">
        <HomeLabel htmlFor="table_number" className="">
          <select
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
        </HomeLabel>

        <HomeLabel htmlFor="reservation_date" className="">
          <input
            id="reservation_date"
            type="date"
            className="w-full h-full p-2 border rounded outline-none border-primary/20"
          />
        </HomeLabel>

        <div className="grid w-full grid-cols-2 gap-5 mb-4">
          <HomeLabel htmlFor="guest_count" className="">
            <select
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
          </HomeLabel>
          
          <HomeLabel htmlFor="reservation_time" className="">
            <input
              id="reservation_time"
              type="time"
              className="w-full h-full p-2 border rounded outline-none border-primary/20"
            />
          </HomeLabel>
        </div>
        <ButtonAction type="submit" className="px-12 py-2">
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
