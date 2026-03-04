// Gunakan komponen ini di halaman khusus Daftar Guru & Staf
export default function DaftarPendidik() {
  const staffData = [
    { no: 1, nama: "Azharudin, S.Pd., M.E.", ptk: "Kepala Sekolah", pendidikan: "S-2" },
    { no: 2, nama: "Mahfudz Maladzi, S.Pd.", ptk: "Guru (Waka)", pendidikan: "S-1" },
    { no: 3, nama: "Yuspita, S.Pd., M.Pd.", ptk: "Guru (Perpustakaan)", pendidikan: "S-2" },
    { no: 4, nama: "Fadilah Hasan, S.Pd.I.", ptk: "Guru (Pimpinan Ponpes)", pendidikan: "S-1" },
    { no: 5, nama: "Rokhman Solekh, S.E.I.", ptk: "Guru", pendidikan: "S-1" },
    { no: 6, nama: "Anisa Fitriyani, S.Pd.", ptk: "Guru (Bendahara)", pendidikan: "S-1" },
    { no: 7, nama: "Dapa Mutakkin, S.Pd.", ptk: "Kepala Tata Usaha", pendidikan: "S-1" },
    { no: 8, nama: "Sari Dwi Puspita, S.Pd.", ptk: "Guru (UKS)", pendidikan: "S-1" },
    { no: 9, nama: "Yuliyanti, S.Pd.", ptk: "Guru (Koord. P5)", pendidikan: "S-1" },
    { no: 10, nama: "Ust. Saeful Anwar, S.Pd.I.", ptk: "Guru", pendidikan: "S-1" },
    { no: 11, nama: "H. Yanto, M.Pd.", ptk: "Guru", pendidikan: "S-2" },
    { no: 12, nama: "Faisal Romdon, S.Pd.", ptk: "Guru (Lab Komputer)", pendidikan: "S-1" },
    { no: 13, nama: "Ust. Muhammad Chaidar Suwito", ptk: "Guru", pendidikan: "Ponpes" },
    { no: 14, nama: "Ust. Bakhrudin", ptk: "Guru", pendidikan: "Ponpes" },
  ];

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-black text-slate-800 mb-10 italic uppercase tracking-tighter border-l-8 border-emerald-600 pl-6">
        Daftar Pendidik & Tenaga Kependidikan
      </h1>
      <div className="overflow-x-auto rounded-[32px] border border-emerald-100 shadow-xl shadow-emerald-50">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-emerald-600 text-white">
              <th className="p-6 text-[10px] font-black uppercase tracking-widest">No</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest">Nama Lengkap</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest">Jabatan / PTK</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest">Pendidikan</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.no} className="border-b border-emerald-50 hover:bg-emerald-50/50 transition-colors">
                <td className="p-6 font-bold text-slate-400">{staff.no}</td>
                <td className="p-6 font-black text-slate-800 text-sm uppercase italic">{staff.nama}</td>
                <td className="p-6 text-xs font-bold text-emerald-700">{staff.ptk}</td>
                <td className="p-6"><span className="bg-slate-100 px-3 py-1 rounded-full text-[9px] font-black uppercase">{staff.pendidikan}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}