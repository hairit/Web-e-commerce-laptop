using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

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

        public virtual DbSet<Color> Colors { get; set; }
        public virtual DbSet<DonHang> DonHangs { get; set; }
        public virtual DbSet<DonHangDetail> DonHangDetails { get; set; }
        public virtual DbSet<GioHang> GioHangs { get; set; }
        public virtual DbSet<GiohangDetail> GiohangDetails { get; set; }
        public virtual DbSet<Image> Images { get; set; }
        public virtual DbSet<KeyboardDetail> KeyboardDetails { get; set; }
        public virtual DbSet<LaptopDescription> LaptopDescriptions { get; set; }
        public virtual DbSet<LaptopDetail> LaptopDetails { get; set; }
        public virtual DbSet<MouseDetail> MouseDetails { get; set; }
        public virtual DbSet<Pcdetail> Pcdetails { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ScreenDetail> ScreenDetails { get; set; }
        public virtual DbSet<TypeProduct> TypeProducts { get; set; }
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
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Color>(entity =>
            {
                entity.ToTable("Color");

                entity.Property(e => e.Id)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<DonHang>(entity =>
            {
                entity.ToTable("DonHang");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.Iduser).HasColumnName("iduser");

                entity.Property(e => e.Ngaydat)
                    .HasColumnType("date")
                    .HasColumnName("ngaydat");

                entity.Property(e => e.Ngayhuydon)
                    .HasColumnType("date")
                    .HasColumnName("ngayhuydon");

                entity.Property(e => e.Phuongthucthanhtoan)
                    .IsRequired()
                    .HasMaxLength(30)
                    .HasColumnName("phuongthucthanhtoan")
                    .HasDefaultValueSql("(N'Thanh toán khi nhận hàng')");

                entity.Property(e => e.Tinhtrang)
                    .IsRequired()
                    .HasMaxLength(30)
                    .HasColumnName("tinhtrang")
                    .HasDefaultValueSql("(N'Chờ xác nhận')");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IduserNavigation)
                    .WithMany(p => p.DonHangs)
                    .HasForeignKey(d => d.Iduser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__DonHang__iduser__47DBAE45");
            });

            modelBuilder.Entity<DonHangDetail>(entity =>
            {
                entity.ToTable("DonHangDetail");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.IdDonHang)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idDonHang");

                entity.Property(e => e.IdProduct)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IdDonHangNavigation)
                    .WithMany(p => p.DonHangDetails)
                    .HasForeignKey(d => d.IdDonHang)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__DonHangDe__idDon__440B1D61");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithMany(p => p.DonHangDetails)
                    .HasForeignKey(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__DonHangDe__idPro__44FF419A");
            });

            modelBuilder.Entity<GioHang>(entity =>
            {
                entity.ToTable("GioHang");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.Iduser).HasColumnName("iduser");

                entity.HasOne(d => d.IduserNavigation)
                    .WithMany(p => p.GioHangs)
                    .HasForeignKey(d => d.Iduser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__GioHang__iduser__48CFD27E");
            });

            modelBuilder.Entity<GiohangDetail>(entity =>
            {
                entity.ToTable("GiohangDetail");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.IdGioHang)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idGioHang");

                entity.Property(e => e.IdProduct)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IdGioHangNavigation)
                    .WithMany(p => p.GiohangDetails)
                    .HasForeignKey(d => d.IdGioHang)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__GiohangDe__idGio__45F365D3");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithMany(p => p.GiohangDetails)
                    .HasForeignKey(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__GiohangDe__idPro__46E78A0C");
            });

            modelBuilder.Entity<Image>(entity =>
            {
                entity.ToTable("Image");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.NameImage)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("nameImage");

                entity.Property(e => e.Path)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("path");

                entity.Property(e => e.Position)
                    .HasMaxLength(20)
                    .HasColumnName("position");

                entity.Property(e => e.TypeImage)
                    .HasMaxLength(20)
                    .HasColumnName("typeImage");
            });

            modelBuilder.Entity<KeyboardDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__Keyboard__5EEC79D1519DABA1");

                entity.ToTable("KeyboardDetail");

                entity.Property(e => e.IdProduct)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

                entity.Property(e => e.Brandswitch)
                    .HasMaxLength(50)
                    .HasColumnName("brandswitch");

                entity.Property(e => e.Den)
                    .HasMaxLength(50)
                    .HasColumnName("den");

                entity.Property(e => e.Ketnoi)
                    .HasMaxLength(50)
                    .HasColumnName("ketnoi");

                entity.Property(e => e.Layout).HasColumnName("layout");

                entity.Property(e => e.Loai)
                    .HasMaxLength(50)
                    .HasColumnName("loai");

                entity.Property(e => e.Motaden)
                    .HasMaxLength(100)
                    .HasColumnName("motaden");

                entity.Property(e => e.Motaswitch)
                    .HasMaxLength(100)
                    .HasColumnName("motaswitch");

                entity.Property(e => e.Size)
                    .HasMaxLength(50)
                    .HasColumnName("size");

                entity.Property(e => e.Typeswitch)
                    .HasMaxLength(20)
                    .HasColumnName("typeswitch");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.KeyboardDetail)
                    .HasForeignKey<KeyboardDetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__KeyboardD__idPro__49C3F6B7");
            });

            modelBuilder.Entity<LaptopDescription>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__LaptopDe__5EEC79D18062FB5B");

                entity.ToTable("LaptopDescription");

                entity.Property(e => e.IdProduct)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

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

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.LaptopDescription)
                    .HasForeignKey<LaptopDescription>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__LaptopDes__idPro__4AB81AF0");
            });

            modelBuilder.Entity<LaptopDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__LaptopDe__5EEC79D120E53DE8");

                entity.ToTable("LaptopDetail");

                entity.Property(e => e.IdProduct)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

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

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.LaptopDetail)
                    .HasForeignKey<LaptopDetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__LaptopDet__idPro__4BAC3F29");
            });

            modelBuilder.Entity<MouseDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__MouseDet__5EEC79D1AFB2894B");

                entity.ToTable("MouseDetail");

                entity.Property(e => e.IdProduct)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

                entity.Property(e => e.Dangcambien)
                    .HasMaxLength(50)
                    .HasColumnName("dangcambien");

                entity.Property(e => e.Dophangiai)
                    .HasMaxLength(50)
                    .HasColumnName("dophangiai");

                entity.Property(e => e.Ketnoi)
                    .HasMaxLength(50)
                    .HasColumnName("ketnoi");

                entity.Property(e => e.Khoiluong)
                    .HasMaxLength(40)
                    .HasColumnName("khoiluong");

                entity.Property(e => e.Kichthuoc)
                    .HasMaxLength(50)
                    .HasColumnName("kichthuoc");

                entity.Property(e => e.Kieuketnoi)
                    .HasMaxLength(50)
                    .HasColumnName("kieuketnoi");

                entity.Property(e => e.Led)
                    .HasMaxLength(50)
                    .HasColumnName("led");

                entity.Property(e => e.Loaichuot)
                    .HasMaxLength(50)
                    .HasColumnName("loaichuot");

                entity.Property(e => e.Sonutbam).HasColumnName("sonutbam");

                entity.Property(e => e.Tencambien)
                    .HasMaxLength(50)
                    .HasColumnName("tencambien");

                entity.Property(e => e.Thoigianphanhoi)
                    .HasMaxLength(50)
                    .HasColumnName("thoigianphanhoi");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.MouseDetail)
                    .HasForeignKey<MouseDetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MouseDeta__idPro__4CA06362");
            });

            modelBuilder.Entity<Pcdetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__PCDetail__5EEC79D183C93B62");

                entity.ToTable("PCDetail");

                entity.Property(e => e.IdProduct)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

                entity.Property(e => e.Casepc)
                    .HasMaxLength(100)
                    .HasColumnName("casepc");

                entity.Property(e => e.Cpu)
                    .HasMaxLength(50)
                    .HasColumnName("cpu");

                entity.Property(e => e.Cputype)
                    .HasMaxLength(50)
                    .HasColumnName("cputype");

                entity.Property(e => e.Detailcpu)
                    .HasMaxLength(100)
                    .HasColumnName("detailcpu");

                entity.Property(e => e.Detailram)
                    .HasMaxLength(100)
                    .HasColumnName("detailram");

                entity.Property(e => e.Mainboard)
                    .HasMaxLength(50)
                    .HasColumnName("mainboard");

                entity.Property(e => e.Psu)
                    .HasMaxLength(50)
                    .HasColumnName("psu");

                entity.Property(e => e.Ram)
                    .HasMaxLength(30)
                    .HasColumnName("ram");

                entity.Property(e => e.Typepc)
                    .HasMaxLength(50)
                    .HasColumnName("typepc");

                entity.Property(e => e.Vganame)
                    .HasMaxLength(50)
                    .HasColumnName("vganame");

                entity.Property(e => e.Vgatype)
                    .HasMaxLength(30)
                    .HasColumnName("vgatype");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.Pcdetail)
                    .HasForeignKey<Pcdetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PCDetail__idProd__4D94879B");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.Baohanh).HasColumnName("baohanh");

                entity.Property(e => e.Gia).HasColumnName("gia");

                entity.Property(e => e.Hienthi)
                    .HasColumnName("hienthi")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Idloai)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idloai");

                entity.Property(e => e.Mau)
                    .HasMaxLength(20)
                    .HasColumnName("mau");

                entity.Property(e => e.Nameimage)
                    .HasMaxLength(100)
                    .HasColumnName("nameimage");

                entity.Property(e => e.Namsx).HasColumnName("namsx");

                entity.Property(e => e.Ten)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("ten");

                entity.Property(e => e.Thuonghieu)
                    .HasMaxLength(20)
                    .HasColumnName("thuonghieu");

                entity.HasOne(d => d.IdloaiNavigation)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.Idloai)
                    .HasConstraintName("FK__Product__idloai__4E88ABD4");
            });

            modelBuilder.Entity<ScreenDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__ScreenDe__5EEC79D14146AEAF");

                entity.ToTable("ScreenDetail");

                entity.Property(e => e.IdProduct)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

                entity.Property(e => e.Bemat)
                    .HasMaxLength(50)
                    .HasColumnName("bemat");

                entity.Property(e => e.Congxuat)
                    .HasMaxLength(40)
                    .HasColumnName("congxuat");

                entity.Property(e => e.Dophangiai)
                    .HasMaxLength(30)
                    .HasColumnName("dophangiai");

                entity.Property(e => e.Dophangiaipixel)
                    .HasMaxLength(30)
                    .HasColumnName("dophangiaipixel");

                entity.Property(e => e.Dosang)
                    .HasMaxLength(30)
                    .HasColumnName("dosang");

                entity.Property(e => e.Gocnhin)
                    .HasMaxLength(30)
                    .HasColumnName("gocnhin");

                entity.Property(e => e.Hdr)
                    .HasMaxLength(40)
                    .HasColumnName("hdr");

                entity.Property(e => e.Khoiluong)
                    .HasMaxLength(10)
                    .HasColumnName("khoiluong");

                entity.Property(e => e.Kichthuoc).HasColumnName("kichthuoc");

                entity.Property(e => e.Kieumanhinh)
                    .HasMaxLength(50)
                    .HasColumnName("kieumanhinh");

                entity.Property(e => e.Mauhienthi)
                    .HasMaxLength(30)
                    .HasColumnName("mauhienthi");

                entity.Property(e => e.Tamnen)
                    .HasMaxLength(30)
                    .HasColumnName("tamnen");

                entity.Property(e => e.Tanso).HasColumnName("tanso");

                entity.Property(e => e.Thoigianphanhoi)
                    .HasMaxLength(20)
                    .HasColumnName("thoigianphanhoi");

                entity.Property(e => e.Tile)
                    .HasMaxLength(10)
                    .HasColumnName("tile");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.ScreenDetail)
                    .HasForeignKey<ScreenDetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ScreenDet__idPro__4F7CD00D");
            });

            modelBuilder.Entity<TypeProduct>(entity =>
            {
                entity.ToTable("TypeProduct");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.Ten)
                    .IsRequired()
                    .HasMaxLength(40)
                    .HasColumnName("ten");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Diachi)
                    .HasMaxLength(100)
                    .HasColumnName("diachi");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("firstname");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("lastname");

                entity.Property(e => e.Mode)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("mode")
                    .HasDefaultValueSql("('CUSTOMER')");

                entity.Property(e => e.Nameimage)
                    .HasMaxLength(200)
                    .HasColumnName("nameimage");

                entity.Property(e => e.Pass)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("pass");

                entity.Property(e => e.Sdt)
                    .HasMaxLength(11)
                    .HasColumnName("sdt");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
