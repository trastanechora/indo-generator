import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/frontend/delivery/presentations/Table"

const people = [
  {
    id: "3314082412950010",
    name: "Maestro Trastanechora",
    gender: "Laki-laki",
    address: "Ds. Ngarum",
    dob: '24-12-1995',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Table>
          <TableCaption>List di atas merupakan data palsu</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">NIK</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Jenis Kelamin</TableHead>
              <TableHead>Usia</TableHead>
              <TableHead>Alamat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person.id}>
                <TableCell className="font-medium">{person.id}</TableCell>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.gender}</TableCell>
                <TableCell>{person.dob}</TableCell>
                <TableCell>{person.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
