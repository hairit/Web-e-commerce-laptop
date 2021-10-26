using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class LaptopContext : DbContext
    {
        public LaptopContext()
        {
        }

        public LaptopContext(DbContextOptions<LaptopContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ChitietDonHang> ChitietDonHangs { get; set; }
        public virtual DbSet<ChitietGioHang> ChitietGioHangs { get; set; }
        public virtual DbSet<DetailKeyBoard> DetailKeyBoards { get; set; }
        public virtual DbSet<DonHang> DonHangs { get; set; }
        public virtual DbSet<GioHang> GioHangs { get; set; }
        public virtual DbSet<LoaiSanPham> LoaiSanPhams { get; set; }
        public virtual DbSet<MoTaLaptop> MoTaLaptops { get; set; }
        public virtual DbSet<SanPham> SanPhams { get; set; }
        public virtual DbSet<ThongSoLaptop> ThongSoLaptops { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("name=laptop");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<ChitietDonHang>(entity =>
            {
                entity.ToTable("ChitietDonHang");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Iddonhang).HasColumnName("iddonhang");

                entity.Property(e => e.Idsanpham)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("idsanpham")
                    .IsFixedLength(true);

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IddonhangNavigation)
                    .WithMany(p => p.ChitietDonHangs)
                    .HasForeignKey(d => d.Iddonhang)
                    .HasConstraintName("FK__ChitietDo__iddon__4D94879B");

                entity.HasOne(d => d.IdsanphamNavigation)
                    .WithMany(p => p.ChitietDonHangs)
                    .HasForeignKey(d => d.Idsanpham)
                    .HasConstraintName("FK__ChitietDo__idsan__4E88ABD4");
            });

            modelBuilder.Entity<ChitietGioHang>(entity =>
            {
                entity.ToTable("ChitietGioHang");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Idgiohang).HasColumnName("idgiohang");

                entity.Property(e => e.Idsanpham)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("idsanpham")
                    .IsFixedLength(true);

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IdgiohangNavigation)
                    .WithMany(p => p.ChitietGioHangs)
                    .HasForeignKey(d => d.Idgiohang)
                    .HasConstraintName("FK__ChitietGi__idgio__5441852A");

                entity.HasOne(d => d.IdsanphamNavigation)
                    .WithMany(p => p.ChitietGioHangs)
                    .HasForeignKey(d => d.Idsanpham)
                    .HasConstraintName("FK__ChitietGi__idsan__5535A963");
            });

            modelBuilder.Entity<DetailKeyBoard>(entity =>
            {
                entity.ToTable("DetailKeyBoard");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Den)
                    .HasMaxLength(20)
                    .HasColumnName("den");

                entity.Property(e => e.Idsanpham)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("idsanpham")
                    .IsFixedLength(true);

                entity.Property(e => e.Ketnoi)
                    .HasMaxLength(20)
                    .HasColumnName("ketnoi");

                entity.Property(e => e.Loai)
                    .HasMaxLength(20)
                    .HasColumnName("loai");

                entity.Property(e => e.Phimchucnang)
                    .HasMaxLength(20)
                    .HasColumnName("phimchucnang");

                entity.Property(e => e.Size)
                    .HasMaxLength(20)
                    .HasColumnName("size");

                entity.Property(e => e.Switch)
                    .HasMaxLength(20)
                    .HasColumnName("switch");

                entity.HasOne(d => d.IdsanphamNavigation)
                    .WithMany(p => p.DetailKeyBoards)
                    .HasForeignKey(d => d.Idsanpham)
                    .HasConstraintName("FK__DetailKeyB__size__44FF419A");
            });

            modelBuilder.Entity<DonHang>(entity =>
            {
                entity.ToTable("DonHang");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Iduser).HasColumnName("iduser");

                entity.Property(e => e.Ngaydat)
                    .HasColumnType("date")
                    .HasColumnName("ngaydat");

                entity.Property(e => e.Ngaytra)
                    .HasColumnType("date")
                    .HasColumnName("ngaytra");

                entity.Property(e => e.Phuongthucthanhtoan)
                    .HasMaxLength(30)
                    .HasColumnName("phuongthucthanhtoan")
                    .HasDefaultValueSql("(N'Thanh toán khi nhận hàng')");

                entity.Property(e => e.Tinhtrang)
                    .HasMaxLength(30)
                    .HasColumnName("tinhtrang")
                    .HasDefaultValueSql("(N'Chờ xác nhận')");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IduserNavigation)
                    .WithMany(p => p.DonHangs)
                    .HasForeignKey(d => d.Iduser)
                    .HasConstraintName("FK__DonHang__iduser__4AB81AF0");
            });

            modelBuilder.Entity<GioHang>(entity =>
            {
                entity.ToTable("GioHang");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Iduser).HasColumnName("iduser");

                entity.HasOne(d => d.IduserNavigation)
                    .WithMany(p => p.GioHangs)
                    .HasForeignKey(d => d.Iduser)
                    .HasConstraintName("FK__GioHang__iduser__5165187F");
            });

            modelBuilder.Entity<LoaiSanPham>(entity =>
            {
                entity.ToTable("LoaiSanPham");

                entity.Property(e => e.Id)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("id")
                    .IsFixedLength(true);

                entity.Property(e => e.Ten)
                    .IsRequired()
                    .HasMaxLength(40)
                    .HasColumnName("ten");
            });

            modelBuilder.Entity<MoTaLaptop>(entity =>
            {
                entity.HasKey(e => e.Idsanpham)
                    .HasName("PK__MoTaLapt__C5FDB0E546F89A77");

                entity.ToTable("MoTaLaptop");

                entity.Property(e => e.Idsanpham)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("idsanpham")
                    .IsFixedLength(true);

                entity.Property(e => e.Congketnoi)
                    .HasMaxLength(100)
                    .HasColumnName("congketnoi");

                entity.Property(e => e.Congxuathinh)
                    .HasMaxLength(100)
                    .HasColumnName("congxuathinh");

                entity.Property(e => e.Detailcpu)
                    .HasMaxLength(100)
                    .HasColumnName("detailcpu");

                entity.Property(e => e.Detailmanhinh)
                    .HasMaxLength(100)
                    .HasColumnName("detailmanhinh");

                entity.Property(e => e.Detailram)
                    .HasMaxLength(100)
                    .HasColumnName("detailram");

                entity.Property(e => e.Detailvga)
                    .HasMaxLength(100)
                    .HasColumnName("detailvga");

                entity.Property(e => e.Hdh)
                    .HasMaxLength(100)
                    .HasColumnName("hdh");

                entity.Property(e => e.Ketnoikhongday)
                    .HasMaxLength(100)
                    .HasColumnName("ketnoikhongday");

                entity.Property(e => e.Khoiluong)
                    .HasMaxLength(100)
                    .HasColumnName("khoiluong");

                entity.Property(e => e.Kieukhe)
                    .HasMaxLength(100)
                    .HasColumnName("kieukhe");

                entity.Property(e => e.Ocung)
                    .HasMaxLength(100)
                    .HasColumnName("ocung");

                entity.Property(e => e.Pin)
                    .HasMaxLength(100)
                    .HasColumnName("pin");

                entity.Property(e => e.Size)
                    .HasMaxLength(100)
                    .HasColumnName("size");

                entity.HasOne(d => d.IdsanphamNavigation)
                    .WithOne(p => p.MoTaLaptop)
                    .HasForeignKey<MoTaLaptop>(d => d.Idsanpham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MoTaLaptop__pin__3F466844");
            });

            modelBuilder.Entity<SanPham>(entity =>
            {
                entity.ToTable("SanPham");

                entity.Property(e => e.Id)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("id")
                    .IsFixedLength(true);

                entity.Property(e => e.Baohanh).HasColumnName("baohanh");

                entity.Property(e => e.Gia).HasColumnName("gia");

                entity.Property(e => e.Hienthi)
                    .HasColumnName("hienthi")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Idloai)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("idloai")
                    .IsFixedLength(true);

                entity.Property(e => e.Nameimage)
                    .HasMaxLength(100)
                    .HasColumnName("nameimage");

                entity.Property(e => e.Namsx).HasColumnName("namsx");

                entity.Property(e => e.Ten)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("ten");

                entity.Property(e => e.Thuonghieu)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("thuonghieu");

                entity.HasOne(d => d.IdloaiNavigation)
                    .WithMany(p => p.SanPhams)
                    .HasForeignKey(d => d.Idloai)
                    .HasConstraintName("FK__SanPham__nameima__3C69FB99");
            });

            modelBuilder.Entity<ThongSoLaptop>(entity =>
            {
                entity.HasKey(e => e.Idsanpham)
                    .HasName("PK__ThongSoL__C5FDB0E5361ACBF3");

                entity.ToTable("ThongSoLaptop");

                entity.Property(e => e.Idsanpham)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("idsanpham")
                    .IsFixedLength(true);

                entity.Property(e => e.Cpu)
                    .HasMaxLength(20)
                    .HasColumnName("cpu");

                entity.Property(e => e.Manhinh)
                    .HasMaxLength(10)
                    .HasColumnName("manhinh");

                entity.Property(e => e.Ram)
                    .HasMaxLength(20)
                    .HasColumnName("ram");

                entity.Property(e => e.Vga)
                    .HasMaxLength(20)
                    .HasColumnName("vga");

                entity.HasOne(d => d.IdsanphamNavigation)
                    .WithOne(p => p.ThongSoLaptop)
                    .HasForeignKey<ThongSoLaptop>(d => d.Idsanpham)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ThongSoLa__idsan__4222D4EF");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Diachi)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("diachi");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Gioitinh)
                    .IsRequired()
                    .HasMaxLength(10)
                    .HasColumnName("gioitinh");

                entity.Property(e => e.Nameimage)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("nameimage");

                entity.Property(e => e.Nameuser)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("nameuser");

                entity.Property(e => e.Pass)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("pass")
                    .IsFixedLength(true);

                entity.Property(e => e.Position)
                    .HasMaxLength(20)
                    .HasColumnName("position")
                    .HasDefaultValueSql("('CUSTOMER')");

                entity.Property(e => e.Sdt)
                    .IsRequired()
                    .HasMaxLength(11)
                    .HasColumnName("sdt");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
