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
        public virtual DbSet<Bill> Bills { get; set; }
        public virtual DbSet<BillDetail> BillDetails { get; set; }
        public virtual DbSet<CartDetail> CartDetails { get; set; }
        public virtual DbSet<Color> Colors { get; set; }
        public virtual DbSet<HeadphoneDetail> HeadphoneDetails { get; set; }
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

            modelBuilder.Entity<Bill>(entity =>
            {
                entity.ToTable("Bill");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.Diachinhan)
                    .IsRequired()
                    .HasMaxLength(300)
                    .HasColumnName("diachinhan");

                entity.Property(e => e.Iduser).HasColumnName("iduser");

                entity.Property(e => e.Ngaydat)
                    .HasColumnType("date")
                    .HasColumnName("ngaydat");

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
                    .WithMany(p => p.Bills)
                    .HasForeignKey(d => d.Iduser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Bill__iduser__5629CD9C");
            });

            modelBuilder.Entity<BillDetail>(entity =>
            {
                entity.HasKey(e => new { e.IdBill, e.IdProduct })
                    .HasName("PK__BillDeta__E317F4054E196D4D");

                entity.ToTable("BillDetail");

                entity.Property(e => e.IdBill)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idBill");

                entity.Property(e => e.IdProduct)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IdBillNavigation)
                    .WithMany(p => p.BillDetails)
                    .HasForeignKey(d => d.IdBill)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BillDetai__idBil__571DF1D5");
            });

            modelBuilder.Entity<CartDetail>(entity =>
            {
                entity.HasKey(e => new { e.IdUser, e.IdProduct })
                    .HasName("PK__CartDeta__32F90E1FCCD3D94F");

                entity.ToTable("CartDetail");

                entity.Property(e => e.IdUser).HasColumnName("idUser");

                entity.Property(e => e.IdProduct)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

                entity.Property(e => e.Selected)
                    .HasColumnName("selected")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.CartDetails)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CartDetai__idUse__5812160E");
            });

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

            modelBuilder.Entity<HeadphoneDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__Headphon__5EEC79D122880B0C");

                entity.ToTable("HeadphoneDetail");

                entity.Property(e => e.IdProduct)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

                entity.Property(e => e.Ketnoi)
                    .HasMaxLength(50)
                    .HasColumnName("ketnoi");

                entity.Property(e => e.Khoiluong)
                    .HasMaxLength(40)
                    .HasColumnName("khoiluong");

                entity.Property(e => e.Kichthuocdriver)
                    .HasMaxLength(30)
                    .HasColumnName("kichthuocdriver");

                entity.Property(e => e.Kieuketnoi)
                    .HasMaxLength(100)
                    .HasColumnName("kieuketnoi");

                entity.Property(e => e.Kieupin)
                    .HasMaxLength(50)
                    .HasColumnName("kieupin");

                entity.Property(e => e.Kieutainghe)
                    .HasMaxLength(50)
                    .HasColumnName("kieutainghe");

                entity.Property(e => e.Led)
                    .HasMaxLength(30)
                    .HasColumnName("led");

                entity.Property(e => e.Microphone)
                    .HasMaxLength(30)
                    .HasColumnName("microphone");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.HeadphoneDetail)
                    .HasForeignKey<HeadphoneDetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Headphone__idPro__59063A47");
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
                    .HasName("PK__Keyboard__5EEC79D104963643");

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
                    .HasConstraintName("FK__KeyboardD__idPro__59FA5E80");
            });

            modelBuilder.Entity<LaptopDescription>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__LaptopDe__5EEC79D1A39B1584");

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

                entity.Property(e => e.Typelaptop)
                    .HasMaxLength(200)
                    .HasColumnName("typelaptop");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.LaptopDescription)
                    .HasForeignKey<LaptopDescription>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__LaptopDes__idPro__5AEE82B9");
            });

            modelBuilder.Entity<LaptopDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__LaptopDe__5EEC79D17F884A8D");

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
                    .HasConstraintName("FK__LaptopDet__idPro__5BE2A6F2");
            });

            modelBuilder.Entity<MouseDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__MouseDet__5EEC79D16053FFFE");

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
                    .HasConstraintName("FK__MouseDeta__idPro__5CD6CB2B");
            });

            modelBuilder.Entity<Pcdetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__PCDetail__5EEC79D175579697");

                entity.ToTable("PCDetail");

                entity.Property(e => e.IdProduct)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idProduct");

                entity.Property(e => e.Casepc)
                    .HasMaxLength(100)
                    .HasColumnName("casepc");

                entity.Property(e => e.Cool)
                    .HasMaxLength(100)
                    .HasColumnName("cool");

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
                    .HasConstraintName("FK__PCDetail__idProd__5DCAEF64");
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

                entity.Property(e => e.Giacu).HasColumnName("giacu");

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

                entity.Property(e => e.Tinhtrang)
                    .HasMaxLength(500)
                    .HasColumnName("tinhtrang");

                entity.Property(e => e.Uudai)
                    .HasMaxLength(500)
                    .HasColumnName("uudai");

                entity.HasOne(d => d.IdloaiNavigation)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.Idloai)
                    .HasConstraintName("FK__Product__idloai__5EBF139D");
            });

            modelBuilder.Entity<ScreenDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__ScreenDe__5EEC79D15816850D");

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
                    .HasConstraintName("FK__ScreenDet__idPro__5FB337D6");
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
