using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class StoreContext : DbContext
    {
        public StoreContext()
        {
        }

        public StoreContext(DbContextOptions<StoreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ChitietDonHang> ChitietDonHangs { get; set; }
        public virtual DbSet<ChitietGioHang> ChitietGioHangs { get; set; }
        public virtual DbSet<DetailKeyBoard> DetailKeyBoards { get; set; }
        public virtual DbSet<DonHang> DonHangs { get; set; }
        public virtual DbSet<GioHang> GioHangs { get; set; }
        public virtual DbSet<Image> Images { get; set; }
        public virtual DbSet<LoaiSanPham> LoaiSanPhams { get; set; }
        public virtual DbSet<MoTaLaptop> MoTaLaptops { get; set; }
        public virtual DbSet<SanPham> SanPhams { get; set; }
        public virtual DbSet<ThongSoLaptop> ThongSoLaptops { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("name=DB");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChitietDonHang>(entity =>
            {
                entity.ToTable("ChitietDonHang");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Iddonhang).HasColumnName("iddonhang");

                entity.Property(e => e.Idsanpham)
                    .HasColumnName("idsanpham")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IddonhangNavigation)
                    .WithMany(p => p.ChitietDonHangs)
                    .HasForeignKey(d => d.Iddonhang)
                    .HasConstraintName("FK__ChitietDo__iddon__4E88ABD4");

                entity.HasOne(d => d.IdsanphamNavigation)
                    .WithMany(p => p.ChitietDonHangs)
                    .HasForeignKey(d => d.Idsanpham)
                    .HasConstraintName("FK__ChitietDo__idsan__4F7CD00D");
            });

            modelBuilder.Entity<ChitietGioHang>(entity =>
            {
                entity.ToTable("ChitietGioHang");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Idgiohang).HasColumnName("idgiohang");

                entity.Property(e => e.Idsanpham)
                    .HasColumnName("idsanpham")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IdgiohangNavigation)
                    .WithMany(p => p.ChitietGioHangs)
                    .HasForeignKey(d => d.Idgiohang)
                    .HasConstraintName("FK__ChitietGi__idgio__5070F446");

                entity.HasOne(d => d.IdsanphamNavigation)
                    .WithMany(p => p.ChitietGioHangs)
                    .HasForeignKey(d => d.Idsanpham)
                    .HasConstraintName("FK__ChitietGi__idsan__5165187F");
            });

            modelBuilder.Entity<DetailKeyBoard>(entity =>
            {
                entity.ToTable("DetailKeyBoard");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Den)
                    .HasColumnName("den")
                    .HasMaxLength(20);

                entity.Property(e => e.Idsanpham)
                    .HasColumnName("idsanpham")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Ketnoi)
                    .HasColumnName("ketnoi")
                    .HasMaxLength(20);

                entity.Property(e => e.Loai)
                    .HasColumnName("loai")
                    .HasMaxLength(20);

                entity.Property(e => e.Phimchucnang)
                    .HasColumnName("phimchucnang")
                    .HasMaxLength(20);

                entity.Property(e => e.Size)
                    .HasColumnName("size")
                    .HasMaxLength(20);

                entity.Property(e => e.Switch)
                    .HasColumnName("switch")
                    .HasMaxLength(20);

                entity.HasOne(d => d.IdsanphamNavigation)
                    .WithMany(p => p.DetailKeyBoards)
                    .HasForeignKey(d => d.Idsanpham)
                    .HasConstraintName("FK__DetailKey__idsan__52593CB8");
            });

            modelBuilder.Entity<DonHang>(entity =>
            {
                entity.ToTable("DonHang");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Iduser).HasColumnName("iduser");

                entity.Property(e => e.Ngaydat)
                    .HasColumnName("ngaydat")
                    .HasColumnType("date");

                entity.Property(e => e.Ngayhuydon)
                    .HasColumnName("ngayhuydon")
                    .HasColumnType("date");

                entity.Property(e => e.Phuongthucthanhtoan)
                    .HasColumnName("phuongthucthanhtoan")
                    .HasMaxLength(30)
                    .HasDefaultValueSql("(N'Thanh toán khi nhận hàng')");

                entity.Property(e => e.Tinhtrang)
                    .HasColumnName("tinhtrang")
                    .HasMaxLength(30)
                    .HasDefaultValueSql("(N'Chờ xác nhận')");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IduserNavigation)
                    .WithMany(p => p.DonHangs)
                    .HasForeignKey(d => d.Iduser)
                    .HasConstraintName("FK__DonHang__iduser__534D60F1");
            });

            modelBuilder.Entity<GioHang>(entity =>
            {
                entity.ToTable("GioHang");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Iduser).HasColumnName("iduser");

                entity.HasOne(d => d.IduserNavigation)
                    .WithMany(p => p.GioHangs)
                    .HasForeignKey(d => d.Iduser)
                    .HasConstraintName("FK__GioHang__iduser__5441852A");
            });

            modelBuilder.Entity<Image>(entity =>
            {
                entity.ToTable("Image");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.NameImage)
                    .HasColumnName("nameImage")
                    .HasMaxLength(100);

                entity.Property(e => e.Path)
                    .HasColumnName("path")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Position)
                    .HasColumnName("position")
                    .HasMaxLength(20);

                entity.Property(e => e.TypeImage)
                    .HasColumnName("typeImage")
                    .HasMaxLength(20);
            });

            modelBuilder.Entity<LoaiSanPham>(entity =>
            {
                entity.ToTable("LoaiSanPham");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Ten)
                    .IsRequired()
                    .HasColumnName("ten")
                    .HasMaxLength(40);
            });

            modelBuilder.Entity<MoTaLaptop>(entity =>
            {
                entity.HasKey(e => e.Idsanpham)
                    .HasName("PK__MoTaLapt__C5FDB0E5748E49B7");

                entity.ToTable("MoTaLaptop");

                entity.Property(e => e.Idsanpham)
                    .HasColumnName("idsanpham")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Congketnoi)
                    .HasColumnName("congketnoi")
                    .HasMaxLength(100);

                entity.Property(e => e.Congxuathinh)
                    .HasColumnName("congxuathinh")
                    .HasMaxLength(100);

                entity.Property(e => e.Detailcpu)
                    .HasColumnName("detailcpu")
                    .HasMaxLength(100);

                entity.Property(e => e.Detailmanhinh)
                    .HasColumnName("detailmanhinh")
                    .HasMaxLength(100);

                entity.Property(e => e.Detailram)
                    .HasColumnName("detailram")
                    .HasMaxLength(100);

                entity.Property(e => e.Detailvga)
                    .HasColumnName("detailvga")
                    .HasMaxLength(100);

                entity.Property(e => e.Hdh)
                    .HasColumnName("hdh")
                    .HasMaxLength(100);

                entity.Property(e => e.Ketnoikhongday)
                    .HasColumnName("ketnoikhongday")
                    .HasMaxLength(100);

                entity.Property(e => e.Khoiluong)
                    .HasColumnName("khoiluong")
                    .HasMaxLength(100);

                entity.Property(e => e.Kieukhe)
                    .HasColumnName("kieukhe")
                    .HasMaxLength(100);

                entity.Property(e => e.Ocung)
                    .HasColumnName("ocung")
                    .HasMaxLength(100);

                entity.Property(e => e.Pin)
                    .HasColumnName("pin")
                    .HasMaxLength(100);

                entity.Property(e => e.Size)
                    .HasColumnName("size")
                    .HasMaxLength(100);

                entity.HasOne(d => d.IdsanphamNavigation)
                    .WithOne(p => p.MoTaLaptop)
                    .HasForeignKey<MoTaLaptop>(d => d.Idsanpham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MoTaLapto__idsan__5535A963");
            });

            modelBuilder.Entity<SanPham>(entity =>
            {
                entity.ToTable("SanPham");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Baohanh).HasColumnName("baohanh");

                entity.Property(e => e.Gia).HasColumnName("gia");

                entity.Property(e => e.Hienthi)
                    .HasColumnName("hienthi")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Idloai)
                    .HasColumnName("idloai")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Nameimage)
                    .HasColumnName("nameimage")
                    .HasMaxLength(100);

                entity.Property(e => e.Namsx).HasColumnName("namsx");

                entity.Property(e => e.Ten)
                    .IsRequired()
                    .HasColumnName("ten")
                    .HasMaxLength(100);

                entity.Property(e => e.Thuonghieu)
                    .IsRequired()
                    .HasColumnName("thuonghieu")
                    .HasMaxLength(20);

                entity.HasOne(d => d.IdloaiNavigation)
                    .WithMany(p => p.SanPhams)
                    .HasForeignKey(d => d.Idloai)
                    .HasConstraintName("FK__SanPham__idloai__5629CD9C");
            });

            modelBuilder.Entity<ThongSoLaptop>(entity =>
            {
                entity.HasKey(e => e.Idsanpham)
                    .HasName("PK__ThongSoL__C5FDB0E5B127A567");

                entity.ToTable("ThongSoLaptop");

                entity.Property(e => e.Idsanpham)
                    .HasColumnName("idsanpham")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Cpu)
                    .HasColumnName("cpu")
                    .HasMaxLength(20);

                entity.Property(e => e.Manhinh)
                    .HasColumnName("manhinh")
                    .HasMaxLength(10);

                entity.Property(e => e.Ram)
                    .HasColumnName("ram")
                    .HasMaxLength(20);

                entity.Property(e => e.Vga)
                    .HasColumnName("vga")
                    .HasMaxLength(20);

                entity.HasOne(d => d.IdsanphamNavigation)
                    .WithOne(p => p.ThongSoLaptop)
                    .HasForeignKey<ThongSoLaptop>(d => d.Idsanpham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ThongSoLa__idsan__571DF1D5");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Diachi)
                    .IsRequired()
                    .HasColumnName("diachi")
                    .HasMaxLength(100);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(50);

                entity.Property(e => e.Gioitinh)
                    .IsRequired()
                    .HasColumnName("gioitinh")
                    .HasMaxLength(10);

                entity.Property(e => e.Nameimage)
                    .IsRequired()
                    .HasColumnName("nameimage")
                    .HasMaxLength(200);

                entity.Property(e => e.Nameuser)
                    .IsRequired()
                    .HasColumnName("nameuser")
                    .HasMaxLength(100);

                entity.Property(e => e.Pass)
                    .IsRequired()
                    .HasColumnName("pass")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Position)
                    .HasColumnName("position")
                    .HasMaxLength(20)
                    .HasDefaultValueSql("('CUSTOMER')");

                entity.Property(e => e.Sdt)
                    .IsRequired()
                    .HasColumnName("sdt")
                    .HasMaxLength(11);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
